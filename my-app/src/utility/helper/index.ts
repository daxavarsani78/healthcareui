import {
  careIcon,
  handicappedIcon,
  headphoneIcon,
  homeIcon,
  livingRoomIcon,
  nursingIcon,
  oldIcon,
  partnerIcon,
  puzzleIcon,
} from "../../assets/images";
import { IServiceList } from "../interfaces/service-page";

const loaderDiv =
  typeof window !== "undefined" && document.getElementById("loader");

export const showLoader = () => {
  if (loaderDiv) {
    loaderDiv.style.opacity = "1";
    loaderDiv.style.visibility = "visible";
  }
};

export const hideLoader = () => {
  if (loaderDiv) {
    loaderDiv.style.opacity = "0";
    loaderDiv.style.visibility = "hidden";
  }
};
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "auto",
  });
};

export const getDateLabel = (date: string) => {
  if (new Date(date).getDate() === new Date().getDate()) {
    return "Today";
  }
  if (new Date(date).getDate() === new Date().getDate() - 1) {
    return "Yesterday";
  }
  return new Date(date).toLocaleDateString("en-GB");
};

export const servicesList: IServiceList[] = [
  {
    id: 1,
    title: "Individual and Personal Care",
    icon: oldIcon,
    description1: `Always Care aims to support you to achieve your goals your
    way, to make your life easy. We can provide as much personal
    help as you need to start the day feeling fresh.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
    description3: `But I must explain to you how all this mistaken idea of
    denouncing pleasure and praising pain was born and I will give
    you a complete account of the system, and expound the actual
    teachings of the great explorer of the truth, the master-builder
    of human happiness. No one rejects, dislikes, or avoids pleasure
    itself, because it is pleasure, but because those who do not
    know how to pursue pleasure rationally encounter consequences
    that are extremely painful. Nor again is there anyone who loves
    or pursues or desires to obtain pain of itself, because it is
    pain, but because occasionally circumstances occur i`,
    description4: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
  },
  {
    id: 2,
    title: "In-home Drop in Support",
    icon: homeIcon,
    description1: `Always Care is also there to support the Carer. Our
    short-term accommodation is designed to enable the Carer to
    take some time off.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
    description3: `But I must explain to you how all this mistaken idea of
    denouncing pleasure and praising pain was born and I will give
    you a complete account of the system, and expound the actual
    teachings of the great explorer of the truth, the master-builder
    of human happiness. No one rejects, dislikes, or avoids pleasure
    itself, because it is pleasure, but because those who do not
    know how to pursue pleasure rationally encounter consequences
    that are extremely painful. Nor again is there anyone who loves
    or pursues or desires to obtain pain of itself, because it is
    pain, but because occasionally circumstances occur i`,
    description4: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
  },
  {
    id: 3,
    title: "Have Fun with our Group Activities",
    icon: puzzleIcon,
    description1: `We can help you get out of the house and back into the
    community, and our group activities are about supporting you
    to become more active within the community.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
    description3: `But I must explain to you how all this mistaken idea of
    denouncing pleasure and praising pain was born and I will give
    you a complete account of the system, and expound the actual
    teachings of the great explorer of the truth, the master-builder
    of human happiness. No one rejects, dislikes, or avoids pleasure
    itself, because it is pleasure, but because those who do not
    know how to pursue pleasure rationally encounter consequences
    that are extremely painful. Nor again is there anyone who loves
    or pursues or desires to obtain pain of itself, because it is
    pain, but because occasionally circumstances occur i`,
    description4: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
  },
  {
    id: 4,
    title: "Assistance with Daily Living",
    icon: partnerIcon,
    description1: `Need some extra help at home? We make it possible for you to
    remain living independently in your own home by supplying a
    wide range of services to keep your home running smoothly.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
    description3: `But I must explain to you how all this mistaken idea of
    denouncing pleasure and praising pain was born and I will give
    you a complete account of the system, and expound the actual
    teachings of the great explorer of the truth, the master-builder
    of human happiness. No one rejects, dislikes, or avoids pleasure
    itself, because it is pleasure, but because those who do not
    know how to pursue pleasure rationally encounter consequences
    that are extremely painful. Nor again is there anyone who loves
    or pursues or desires to obtain pain of itself, because it is
    pain, but because occasionally circumstances occur i`,
    description4: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
  },
  {
    id: 5,
    title: "High Care and Complex Needs",
    icon: careIcon,
    description1: `We offer a full range of support services for people living
    with all types of disability in the community. The level of
    support we offer varies, depending on those individual
    needs.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
    description3: `But I must explain to you how all this mistaken idea of
    denouncing pleasure and praising pain was born and I will give
    you a complete account of the system, and expound the actual
    teachings of the great explorer of the truth, the master-builder
    of human happiness. No one rejects, dislikes, or avoids pleasure
    itself, because it is pleasure, but because those who do not
    know how to pursue pleasure rationally encounter consequences
    that are extremely painful. Nor again is there anyone who loves
    or pursues or desires to obtain pain of itself, because it is
    pain, but because occasionally circumstances occur i`,
    description4: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
  },
  {
    id: 6,
    title: "Community Nursing",
    icon: nursingIcon,
    description1: `Always Care provides a range of community care nursing
    services to support individuals to care for themselves with
    the assistance of family and friends.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
    description3: `But I must explain to you how all this mistaken idea of
    denouncing pleasure and praising pain was born and I will give
    you a complete account of the system, and expound the actual
    teachings of the great explorer of the truth, the master-builder
    of human happiness. No one rejects, dislikes, or avoids pleasure
    itself, because it is pleasure, but because those who do not
    know how to pursue pleasure rationally encounter consequences
    that are extremely painful. Nor again is there anyone who loves
    or pursues or desires to obtain pain of itself, because it is
    pain, but because occasionally circumstances occur i`,
    description4: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
  },
  {
    id: 7,
    title: "Community Access and Transport",
    icon: handicappedIcon,
    description1: `Our customized programs allow our participants to choose
    activities of their choice, depending on their unique
    circumstances.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
    description3: `But I must explain to you how all this mistaken idea of
    denouncing pleasure and praising pain was born and I will give
    you a complete account of the system, and expound the actual
    teachings of the great explorer of the truth, the master-builder
    of human happiness. No one rejects, dislikes, or avoids pleasure
    itself, because it is pleasure, but because those who do not
    know how to pursue pleasure rationally encounter consequences
    that are extremely painful. Nor again is there anyone who loves
    or pursues or desires to obtain pain of itself, because it is
    pain, but because occasionally circumstances occur i`,
    description4: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
  },
  {
    id: 8,
    title: "Supported Independent Living and SDA Housing",
    icon: livingRoomIcon,
    description1: `Being able to live independently is an essential part of
    life and it allows you to exercise choice and control.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
    description3: `But I must explain to you how all this mistaken idea of
    denouncing pleasure and praising pain was born and I will give
    you a complete account of the system, and expound the actual
    teachings of the great explorer of the truth, the master-builder
    of human happiness. No one rejects, dislikes, or avoids pleasure
    itself, because it is pleasure, but because those who do not
    know how to pursue pleasure rationally encounter consequences
    that are extremely painful. Nor again is there anyone who loves
    or pursues or desires to obtain pain of itself, because it is
    pain, but because occasionally circumstances occur i`,
    description4: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
  },
  {
    id: 9,
    title: "Need help finding the right service?",
    icon: headphoneIcon,
    description1: `If you're not sure which services are right for you, get in
    touch with our friendly team today.`,
    description2: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
    description3: `But I must explain to you how all this mistaken idea of
    denouncing pleasure and praising pain was born and I will give
    you a complete account of the system, and expound the actual
    teachings of the great explorer of the truth, the master-builder
    of human happiness. No one rejects, dislikes, or avoids pleasure
    itself, because it is pleasure, but because those who do not
    know how to pursue pleasure rationally encounter consequences
    that are extremely painful. Nor again is there anyone who loves
    or pursues or desires to obtain pain of itself, because it is
    pain, but because occasionally circumstances occur i`,
    description4: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
    enim ad minim veniam, quis nostrud exercitation ullamco laboris
    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
    in reprehenderit in voluptate velit esse cillum dolore eu fugiat
    nulla pariatur. Excepteur sint occaecat cupidatat non proident,
    sunt in culpa qui officia deserunt mollit anim id est
    laborum."ed ut perspiciatis unde omnis iste natus error sit
    voluptatem accusantium doloremque laudantium, totam rem aperiam,
    eaque ipsa quae ab illo inventore veritatis et quasi architecto
    beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem
    quia voluptas sit aspernatur aut odit aut fugit, sed quia`,
  },
];
