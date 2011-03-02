using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using System.Drawing;
using System.Drawing.Drawing2D;
using System.IO;

public partial class Test : System.Web.UI.Page
{
    protected void Page_Load(object sender, EventArgs e)
    {
        foreach (string imagePath in Directory.GetFiles(@"C:\temp\pic for atar\dosim small"))
        {
            //File.Move(imagePath, cleanPath(imagePath));
            System.Drawing.Image i = System.Drawing.Image.FromFile(imagePath);
            resizeImage(i, new Size(60, 39)).Save(imagePath.Replace("dosim small", "dosim small\\a"));
        }
    }

    private string cleanPath(string imagePath)
    {
        return imagePath.Replace("c_0", "").Replace("c_", "");
    }
    private static System.Drawing.Image resizeImage(System.Drawing.Image imgToResize, Size size)
    {
        //int sourceWidth = imgToResize.Width;
        //int sourceHeight = imgToResize.Height;

        //float nPercent = 0;
        //float nPercentW = 0;
        //float nPercentH = 0;

        //nPercentW = ((float)size.Width / (float)sourceWidth);
        //nPercentH = ((float)size.Height / (float)sourceHeight);

        //if (nPercentH < nPercentW)
        //    nPercent = nPercentH;
        //else
        //    nPercent = nPercentW;

        //int destWidth = (int)(sourceWidth * nPercent);
        //int destHeight = (int)(sourceHeight * nPercent);
        int destWidth = size.Width;
        int destHeight = size.Height;

        Bitmap b = new Bitmap(destWidth, destHeight);
        Graphics g = Graphics.FromImage((System.Drawing.Image)b);
        g.InterpolationMode = InterpolationMode.HighQualityBicubic;

        g.DrawImage(imgToResize, 0, 0, destWidth, destHeight);
        g.Dispose();

        return (System.Drawing.Image)b;
    }
}