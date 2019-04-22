class Book {
    constructor() {
        this.Name = "NewBook",
        this.PaperCount = 0,
        this.PaperNameList = [],
        this.Width = 30,
        this.Height = 20
    }
}

class Vector {
    constructor() {
        this.X = 0,
        this.Y = 0
    }
}

class Element {
    constructor() {
        this.Type = "",
        this.Position = new Vector(),
        this.Width = 0,
        this.Height = 0,
        this.FileName = "",
        this.Text = "",
        this.FontSize = 0
    }
}