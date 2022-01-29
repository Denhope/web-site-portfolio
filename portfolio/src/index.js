import { clickBurgerMenu } from "./js/_hamburger";
import { score } from "./js/_score";
import { changeImage } from "./js/_portfolio";
import { changeLanguage } from "./js/_language";
import { prelodImages } from "./js/_portfolio";
import { changeTheme } from "./js/_theme-swicher";
import { setLocalsettings } from "./js/_localSettings";
prelodImages();
score();
clickBurgerMenu();
changeImage();
changeLanguage();
changeTheme();

setLocalsettings();
