using System.Text.Json.Serialization;

namespace yadVashem;

public class TimeSlot
{
    [JsonPropertyName("startTime")]
    public string? StartTime { get; set; }

    [JsonPropertyName("availablePlaces")]
    public int AvailablePlaces { get; set; }

    [JsonPropertyName("isClosed")]
    public bool IsClosed { get; set; }
    
}
