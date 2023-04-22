[System.Runtime.InteropServices.ComVisible(true)]
private void Form1_Load(object sender, EventArgs e)
{
    webBrowser1.ScriptErrorsSuppressed = true;
    webBrowser1.ObjectForScripting = new Main();
}
public class Main
{
    string message1 = inp;
}