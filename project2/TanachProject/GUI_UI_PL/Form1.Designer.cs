
namespace GUI_UI_PL
{
    partial class Form1
    {
        /// <summary>
        ///  Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        ///  Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        ///  Required method for Designer support - do not modify
        ///  the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            textBox1 = new TextBox();
            Findlocations = new Button();
            finds_word = new ListBox();
            textBox4 = new TextBox();
            look_for_word = new Button();
            find_gimatry = new Button();
            Gimatry = new ListBox();
            label1 = new Label();
            SuspendLayout();
            // 
            // textBox1
            // 
            textBox1.Location = new Point(1002, 160);
            textBox1.Name = "textBox1";
            textBox1.PlaceholderText = "הכנס ";
            textBox1.Size = new Size(82, 27);
            textBox1.TabIndex = 0;
            textBox1.TextChanged += textBox1_TextChanged;
            // 
            // Findlocations
            // 
            Findlocations.Location = new Point(1313, 142);
            Findlocations.Name = "Findlocations";
            Findlocations.Size = new Size(103, 62);
            Findlocations.TabIndex = 3;
            Findlocations.Text = "כל התנך";
            Findlocations.UseVisualStyleBackColor = true;
            Findlocations.Click += Findlocations_Click;
            // 
            // finds_word
            // 
            finds_word.FormattingEnabled = true;
            finds_word.ItemHeight = 20;
            finds_word.Location = new Point(450, 339);
            finds_word.Name = "finds_word";
            finds_word.Size = new Size(1048, 444);
            finds_word.TabIndex = 6;
            finds_word.SelectedIndexChanged += listBox1_SelectedIndexChanged;
            // 
            // textBox4
            // 
            textBox4.Location = new Point(345, 160);
            textBox4.Name = "textBox4";
            textBox4.PlaceholderText = "הכנס מספר";
            textBox4.Size = new Size(89, 27);
            textBox4.TabIndex = 8;
            textBox4.TextChanged += textBox4_TextChanged;
            // 
            // look_for_word
            // 
            look_for_word.Location = new Point(800, 142);
            look_for_word.Name = "look_for_word";
            look_for_word.Size = new Size(156, 62);
            look_for_word.TabIndex = 10;
            look_for_word.Text = "חפוש מיקום";
            look_for_word.UseVisualStyleBackColor = true;
            look_for_word.Click += look_for_word_Click;
            // 
            // find_gimatry
            // 
            find_gimatry.Location = new Point(150, 142);
            find_gimatry.Name = "find_gimatry";
            find_gimatry.Size = new Size(142, 62);
            find_gimatry.TabIndex = 11;
            find_gimatry.Text = "חפוש גימטריא";
            find_gimatry.UseVisualStyleBackColor = true;
            find_gimatry.Click += find_gimatry_Click;
            // 
            // Gimatry
            // 
            Gimatry.FormattingEnabled = true;
            Gimatry.ItemHeight = 20;
            Gimatry.Location = new Point(150, 339);
            Gimatry.Name = "Gimatry";
            Gimatry.Size = new Size(138, 444);
            Gimatry.TabIndex = 12;
            Gimatry.SelectedIndexChanged += Gimatry_SelectedIndexChanged;
            // 
            // label1
            // 
            label1.AutoSize = true;
            label1.Location = new Point(768, 9);
            label1.Name = "label1";
            label1.Size = new Size(89, 20);
            label1.TabIndex = 17;
            label1.Text = "פרויקט תנ\"ך";
            label1.Click += label1_Click;
            // 
            // Form1
            // 
            AutoScaleDimensions = new SizeF(8F, 20F);
            AutoScaleMode = AutoScaleMode.Font;
            ClientSize = new Size(1786, 875);
            Controls.Add(label1);
            Controls.Add(Gimatry);
            Controls.Add(find_gimatry);
            Controls.Add(look_for_word);
            Controls.Add(textBox4);
            Controls.Add(finds_word);
            Controls.Add(Findlocations);
            Controls.Add(textBox1);
            Name = "Form1";
            Text = "Form1";
            Load += Form1_Load;
            ResumeLayout(false);
            PerformLayout();
        }

        #endregion

        private TextBox textBox1;
        private TextBox textBox2;
        private Button Findlocations;
        private ListBox AllFoundplaces;
        private ListBox finds_word;
        private TextBox textBox4;
        private Button look_for_word;
        private Button find_gimatry;
        private ListBox Gimatry;
        private Button look_for_in_Chumash;
        private ListBox Find_index;
        private TextBox textBox5;
        private Label label1;
    }
}