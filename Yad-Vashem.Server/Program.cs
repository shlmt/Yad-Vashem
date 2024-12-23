using System.Text.Json;
using yadVashem;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowGet", policy =>
    {
        policy.AllowAnyOrigin()
                .WithMethods("GET")
                .AllowAnyHeader();
    });
});


var app = builder.Build();

app.UseDefaultFiles();
app.UseStaticFiles();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseCors("AllowGet");
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.MapGet("/api/timeSlot", async () =>
{
    try
    {
        using (FileStream stream = File.OpenRead("./data.json"))
        {
            TimeSlot[] timeSlots = await JsonSerializer.DeserializeAsync<TimeSlot[]>(stream);
            if (timeSlots == null || timeSlots.Length == 0)
                return Results.NoContent();
            return Results.Ok(timeSlots);
        }
    }
    catch (Exception ex)
    {
        return Results.Problem(ex.Message);
    }
})
.WithName("GetTimeSlots")
.WithOpenApi();

app.MapFallbackToFile("/index.html");

app.Run();
