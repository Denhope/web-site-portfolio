import { clickBurgerMenu } from "./js/_hamburger";
import { score } from "./js/_score";
import { changeImage } from "./js/_portfolio";
import { changeLanguage } from "./js/_language";
import { prelodImages } from "./js/_portfolio";
import { changeTheme } from "./js/_theme-swicher";
import { setLocalsettings } from "./js/_localSettings";
import { playVideo } from "./js/_video";
prelodImages();
score();
clickBurgerMenu();
changeImage();
changeLanguage();
changeTheme();
setLocalsettings();
playVideo();