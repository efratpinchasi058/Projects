using System;
using System.Collections.Generic;

namespace Dal_Repository.models;

public partial class Company
{
    public int CompId { get; set; }

    public string CompName { get; set; } = null!;

    public virtual ICollection<Product> Products { get; set; } = new List<Product>();
}
