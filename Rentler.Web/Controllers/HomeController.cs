using Microsoft.AspNet.Mvc;
using Rentler.Web.Models;

namespace Rentler.Web
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View(User());
        }

        public User User()
        {
            User user = new User()
            {
                Name = "Testy",
                Address = "My address"
            };

            return user;
        }
    }
}
