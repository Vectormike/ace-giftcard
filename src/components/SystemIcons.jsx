import {
  faPhone,
  faEnvelope,
  faPlus,
  faBars,
  faTimes,
  faGlobe,
  faSync,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faGithubAlt,
  faMediumM,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import makeFAIcon from "../utils/makeFAIcon";

export const PhoneIcon = makeFAIcon(faPhone);
export const SyncIcon = makeFAIcon(faSync);
export const MoneyIcon = makeFAIcon(faMoneyBill);
export const EnvelopIcon = makeFAIcon(faEnvelope);
export const PlusIcon = makeFAIcon(faPlus);
export const BarsIcon = makeFAIcon(faBars);
export const GithubIcon = makeFAIcon(faGithubAlt);
export const MediumIcon = makeFAIcon(faMediumM);
export const CloseIcon = makeFAIcon(faTimes);
export const LanguageIcon = makeFAIcon(faGlobe);

export const TwitterIcon = makeFAIcon(faTwitter);
export const FacebookIcon = makeFAIcon(faFacebookF);
export const WhatsAppIcon = makeFAIcon(faWhatsapp);
export const LinkedinIcon = makeFAIcon(faLinkedinIn);

export * from "../../config/CustomIcons";
