import khat from "../assets/covers/khat.jpeg";
import veer from "../assets/covers/veer.jpeg";
import dekha from "../assets/covers/dekha.jpeg";
import yetune from "../assets/covers/yetune.jpeg";
import tose from "../assets/covers/tose.jpeg";
import tose1 from "../assets/songs/tose.mp4";
import yetune1 from "../assets/songs/yetune.mp4";
import khat1 from "../assets/songs/khat.mp4";
import dekha1 from "../assets/songs/dekha.mp4";
const songs = [
    {
        id: 1,
        title: "khat",
        artist: "Nizam",
        duration: "2:52",
        cover: khat,
        audio: khat1,
    },
    {
        id: 2,
        title: "Tose naina lage",
        artist: "Nizam",
        duration: "2:06",
        cover: tose,
        audio: tose1
    },
    {
        id: 3,
         title: "ye tune kya kiya",
        artist: "Nizam",
        duration: "1:46",
        cover: yetune,
        audio:yetune1
    },
    {
        id: 4,
        title: "Dekha hi nahi",
        artist: "Nizam",
        duration: "1:24",
        cover: dekha,
        audio:dekha1
    },
    {
        id: 5,
        title: "Aaya Tere Dar Par",
        artist: "Nizam",
        cover:veer,
        duration: "--:--",
        comingSoon: true,
    },
];

export default songs;