using Bll_services;
using System.Security.Cryptography.X509Certificates;
using DTO_Common_enteties;
using System.Windows.Forms;

namespace GUI_UI_PL
{
    public partial class Form1 : Form
    {
        public Form1()
        {
            InitializeComponent();
            this.BackColor = Color.Black;
            label1.ForeColor = System.Drawing.Color.DeepSkyBlue;
            label1.Font = new Font("Ariel", 26);
            Gimatry.ForeColor = Color.Black;
            finds_word.ForeColor = Color.Black;
            find_gimatry.ForeColor = Color.DeepSkyBlue;
            Findlocations.ForeColor = Color.DeepSkyBlue;
            look_for_word.ForeColor = Color.DeepSkyBlue;

        }

        private void Findlocations_Click(object sender, EventArgs e)
        {
            finds_word.DataSource = Bll_services.Search.loc();
        }
        private void look_for_word_Click(object sender, EventArgs e)
        {
            finds_word.DataSource = Bll_services.Search.Find(textBox1.Text);
        }
        private void find_gimatry_Click(object sender, EventArgs e)
        {
            Gimatry.DataSource = Bll_services.Search.Gimatria(textBox4.Text);
        }



        private void textBox3_TextChanged(object sender, EventArgs e)
        {

        }




        private void label1_Click(object sender, EventArgs e)
        {

        }
        private void textBox1_TextChanged(object sender, EventArgs e)
        {
        }
        private void textBox2_TextChanged(object sender, EventArgs e)
        {


        }
        private void listBox1_SelectedIndexChanged(object sender, EventArgs e)
        {
        }

        private void label2_Click(object sender, EventArgs e)
        {
        }
        private void Form1_Load(object sender, EventArgs e)

        {
        }

        private void Gimatry_SelectedIndexChanged(object sender, EventArgs e)
        {

        }


        private void textBox4_TextChanged(object sender, EventArgs e)
        {

        }


    }
}