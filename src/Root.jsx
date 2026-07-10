import "./index.css";
import { Composition } from "remotion";
import { MnbetyIntro, TOTAL_FRAMES } from "./Mnbety";
import { MnbetyHost, HOST_FRAMES } from "./Mnbety/host";
import { MnbetyCareer, CAREER_FRAMES } from "./Mnbety/career";
import { MnbetyReel, REEL_FRAMES } from "./Mnbety/reel";
import { MnbetyCourseIntroEnglish, COURSE_INTRO_ENGLISH_FRAMES } from "./Mnbety/scenes/CourseIntroEnglish";
import { FlagQuiz, BgPreview, LogoPreview } from "./Quiz";
import { PlayerQuizSample, PLAYER_SAMPLE_FRAMES, PlayerQuiz, PLAYER_FRAMES } from "./Quiz/players";
import { LogoQuiz, LOGO_FRAMES, LogoQuizSample, LOGO_SAMPLE_FRAMES } from "./Quiz/logos";
import { LogoQuiz2, LOGO2_FRAMES } from "./Quiz/logos2";
import { FlagQuiz2GS, FLAG2_FRAMES } from "./Quiz/flags2";
import { CapitalQuiz2GS, CAPITAL2_FRAMES } from "./Quiz/capitals2";
import { LogoQuiz3, LOGO3_FRAMES } from "./Quiz/logos3";
import { LOGOS3 } from "./Quiz/logos3Data";
import { ShapeQuizGS, SHAPE_FRAMES } from "./Quiz/shapes";
import { SHAPES1 } from "./Quiz/shapes1Data";
import { SHAPE1_FACTS } from "./Quiz/shape1Facts";
import { SHAPE2_FACTS } from "./Quiz/shape2Facts";
import { LogoQuiz4, LOGO4_FRAMES } from "./Quiz/logos4";
import { LOGOS4 } from "./Quiz/logos4Data";
import { LOGO4_FACTS } from "./Quiz/logo4Facts";
import { CountryQuiz2GS, COUNTRY2_FRAMES } from "./Quiz/countries2";
import { ShapeQuiz2GS, SHAPE2_FRAMES } from "./Quiz/shapes2";
import { SHAPES2 } from "./Quiz/shapes2Data";
import { AnimalQuiz, ANIMAL_FRAMES } from "./Quiz/animals";
import { ANIMALS } from "./Quiz/animalsData";
import { ANIMAL_FACTS } from "./Quiz/animalFacts";
import { FoodQuiz, FOOD_FRAMES } from "./Quiz/foods";
import { FOODS } from "./Quiz/foodsData";
import { FOOD_FACTS } from "./Quiz/foodFacts";
import { CLUBS } from "./Quiz/clubsData";
import { CLUB_FACTS } from "./Quiz/clubFacts";
import { DogQuiz, DOG_FRAMES } from "./Quiz/dogs";
import { DOGS } from "./Quiz/dogsData";
import { DOG_FACTS } from "./Quiz/dogFacts";
import { LandmarkQuiz, LANDMARK_FRAMES } from "./Quiz/landmarks";
import { LANDMARKS } from "./Quiz/landmarksData";
import { LANDMARK_FACTS } from "./Quiz/landmarkFacts";
import { CarQuiz, CAR_FRAMES } from "./Quiz/cars";
import { CARS } from "./Quiz/carsData";
import { CAR_FACTS } from "./Quiz/carFacts";
import { PaintingQuiz, PAINTING_FRAMES } from "./Quiz/paintings";
import { PAINTINGS } from "./Quiz/paintingsData";
import { PAINTING_FACTS } from "./Quiz/paintingFacts";
import { BirdQuiz, BIRD_FRAMES } from "./Quiz/birds";
import { BIRDS } from "./Quiz/birdsData";
import { BIRD_FACTS } from "./Quiz/birdFacts";
import { SeaQuiz, SEA_FRAMES } from "./Quiz/sea";
import { SEA } from "./Quiz/seaData";
import { SEA_FACTS } from "./Quiz/seaFacts";
import { FruitsQuiz, FRUITS_FRAMES } from "./Quiz/fruits";
import { FRUITS } from "./Quiz/fruitsData";
import { FRUIT_FACTS } from "./Quiz/fruitFacts";
import { FLOWER_FACTS } from "./Quiz/flowerFacts";
import { GsThumbV2 } from "./Quiz/gsthumb2";
import { GsThumbV3 } from "./Quiz/gsthumb3";
import { GsThumbV4 } from "./Quiz/gsthumb4";
import { QuizV2, quizFrames } from "./Quiz/quizv2";
const E18CFG = { items: PAINTINGS, facts: PAINTING_FACTS, topicWord: "PAINTING", topicPlural: "PAINTINGS", dir: "paintings", ext: "jpg", fit: "contain", voPrefix: "pt-", nameField: "title", introVo: "vo-intro-painting", coldSlug: "" };
const E10CFG = { items: LOGOS4, facts: LOGO4_FACTS, topicWord: "LOGO", topicPlural: "LOGOS", dir: "logos", ext: "svg", fit: "contain", voPrefix: "nm-", nameField: "name", introVo: "vo-intro-logo", coldSlug: "nxp" };
const E12CFG = { items: SHAPES1, facts: SHAPE1_FACTS, topicWord: "COUNTRY", topicPlural: "COUNTRIES", dir: "maps", ext: "svg", fit: "contain", voPrefix: "fl-", nameField: "name", slugKey: "iso", voKey: "iso", introVo: "vo-intro-shape", coldSlug: "" };
const E11CFG = { items: SHAPES2, facts: SHAPE2_FACTS, topicWord: "COUNTRY", topicPlural: "COUNTRIES", dir: "maps", ext: "svg", fit: "contain", voPrefix: "fl-", nameField: "name", slugKey: "iso", voKey: "iso", introVo: "vo-intro-shape", coldSlug: "" };
const E16CFG = { items: LANDMARKS, facts: LANDMARK_FACTS, topicWord: "COUNTRY", topicPlural: "COUNTRIES", dir: "landmarks", ext: "png", fit: "cover", voPrefix: "fl-", nameField: "country", slugKey: "key", voKey: "iso", introVo: "vo-intro-landmark", coldSlug: "" };
const E07CFG = { items: CAPITALS, facts: CAPITAL_FACTS, topicWord: "CAPITAL", topicPlural: "CAPITALS", dir: "flags", ext: "svg", fit: "contain", voPrefix: "cp-", nameField: "capital", slugKey: "iso", voKey: "iso", introVo: "vo-intro-capital", coldSlug: "" };
const E24CFG = { items: CAPITALS2, facts: CAPITAL2_FACTS, topicWord: "CAPITAL", topicPlural: "CAPITALS", dir: "flags", ext: "svg", fit: "contain", voPrefix: "cp-", nameField: "capital", slugKey: "iso", voKey: "iso", introVo: "vo-intro-capital", coldSlug: "" };
const E26CFG = { items: EMOJI_MOVIES, facts: EMOJI_MOVIE_FACTS, topicWord: "MOVIE", topicPlural: "MOVIES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "em-", introVo: "vo-intro-movie", coldSlug: "" };
const E25CFG = { items: CARLOGOS, facts: CARLOGO_FACTS, topicWord: "CAR", topicPlural: "CARS", dir: "carlogos", ext: "png", fit: "contain", voPrefix: "cl-", nameField: "name", introVo: "vo-intro-car", coldSlug: "" };
const E27CFG = { items: EMOJI_FOODS, facts: EMOJI_FOOD_FACTS, topicWord: "FOOD", topicPlural: "FOODS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "ef-", introVo: "vo-intro-food", coldSlug: "" };
const E28CFG = { items: EMOJI_SONGS, facts: EMOJI_SONG_FACTS, topicWord: "SONG", topicPlural: "SONGS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "es-", introVo: "vo-intro-song", coldSlug: "" };
const E30CFG = { items: TECHLOGOS, facts: TECHLOGO_FACTS, topicWord: "LOGO", topicPlural: "LOGOS", dir: "logos", ext: "svg", fit: "contain", voPrefix: "nm-", nameField: "name", introVo: "vo-intro-tech", coldSlug: "" };
const E01CFG = { items: LOGOS, facts: LOGO_FACTS, topicWord: "LOGO", topicPlural: "LOGOS", dir: "logos", ext: "svg", fit: "contain", voPrefix: "nm-", nameField: "name", introVo: "vo-intro-logo", coldSlug: "jenkins" };
const E02CFG = { items: FLAGS, facts: FLAG_FACTS, topicWord: "FLAG", topicPlural: "FLAGS", dir: "flags", ext: "svg", fit: "contain", voPrefix: "fl-", nameField: "name", slugKey: "iso", voKey: "iso", introVo: "vo-intro-flag", coldSlug: "" };
const E06CFG = { items: FLAGS2, facts: FLAG2_FACTS, topicWord: "FLAG", topicPlural: "FLAGS", dir: "flags", ext: "svg", fit: "contain", voPrefix: "fl-", nameField: "name", slugKey: "iso", voKey: "iso", introVo: "vo-intro-flag", coldSlug: "" };
const E03CFG = { items: ANIMALS, facts: ANIMAL_FACTS, topicWord: "ANIMAL", topicPlural: "ANIMALS", dir: "animals", ext: "png", fit: "cover", voPrefix: "an-", nameField: "name", introVo: "vo-intro-animal", coldSlug: "" };
const E05CFG = { items: LOGOS2, facts: LOGO_FACTS, topicWord: "LOGO", topicPlural: "LOGOS", dir: "logos", ext: "svg", fit: "contain", voPrefix: "nm-", nameField: "name", introVo: "vo-intro-logo", coldSlug: "kubernetes" };
const E08CFG = { items: LOGOS3, facts: LOGO_FACTS, topicWord: "LOGO", topicPlural: "LOGOS", dir: "logos", ext: "svg", fit: "contain", voPrefix: "nm-", nameField: "name", introVo: "vo-intro-logo", coldSlug: "archlinux" };
const E14CFG = { items: FOODS, facts: FOOD_FACTS, topicWord: "FOOD", topicPlural: "FOODS", dir: "foods", ext: "png", fit: "cover", voPrefix: "fd-", nameField: "name", introVo: "vo-intro-food", coldSlug: "" };
const E04CFG = { items: CLUBS, facts: CLUB_FACTS, topicWord: "CLUB", topicPlural: "CLUBS", dir: "clubs", ext: "png", fit: "contain", voPrefix: "cb-", nameField: "name", introVo: "vo-intro-club", coldSlug: "ldu-quito" };
const E17CFG = { items: CARS, facts: CAR_FACTS, topicWord: "CAR", topicPlural: "CARS", dir: "cars", ext: "png", fit: "cover", voPrefix: "cm-", nameField: "name", introVo: "vo-intro-car", coldSlug: "auburn-speedster" };
const E15CFG = { items: DOGS, facts: DOG_FACTS, topicWord: "DOG", topicPlural: "DOGS", dir: "dogs", ext: "png", fit: "cover", voPrefix: "dg-", nameField: "name", introVo: "vo-intro-dog", coldSlug: "finnishlapphund" };
const E19CFG = { items: BIRDS, facts: BIRD_FACTS, topicWord: "BIRD", topicPlural: "BIRDS", dir: "birds", ext: "jpg", fit: "cover", voPrefix: "bd-", nameField: "name", introVo: "vo-intro-bird", coldSlug: "spangled-cotinga" };
const E20CFG = { items: SEA, facts: SEA_FACTS, topicWord: "SEA CREATURE", topicPlural: "SEA ANIMALS", dir: "sea", ext: "jpg", fit: "cover", voPrefix: "sc-", nameField: "name", introVo: "vo-intro-sea", coldSlug: "cleaner-wrasse" };
const E21CFG = { items: FRUITS, facts: FRUIT_FACTS, topicWord: "FRUIT OR VEG", topicPlural: "FRUITS & VEG", dir: "fruits", ext: "jpg", fit: "cover", voPrefix: "fr-", nameField: "name", introVo: "vo-intro-fruit", coldSlug: "ugli-fruit" };
const E09CFG = { items: FLOWERS, facts: FLOWER_FACTS, topicWord: "FLOWER", topicPlural: "FLOWERS", dir: "flowers", ext: "jpg", fit: "cover", voPrefix: "fl-", nameField: "name", introVo: "vo-intro-flower", coldSlug: "" };
import { Word3D } from "./Quiz/Word3D";
import { FruitsV2Quiz, FRUITSV2_FRAMES } from "./Quiz/fruitsv2";
import { FLOWERS } from "./Quiz/flowersData";
import { DINOS } from "./Quiz/dinosData";
import { ShortV2Quiz, SHORTV2_FRAMES } from "./Quiz/shortv2";
import { ButterfliesV2Quiz, BUTTERFLIESV2_FRAMES } from "./Quiz/butterfliesv2";
import { BUTTERFLIES } from "./Quiz/butterfliesData";
import { SnakesV2Quiz, SNAKESV2_FRAMES } from "./Quiz/snakesv2";
import { SNAKES } from "./Quiz/snakesData";
import { ShortQuiz, SHORT_FRAMES } from "./Quiz/short";
import { LOGOS } from "./Quiz/logosData";
import { LOGO_FACTS } from "./Quiz/logoFacts";
import { FLAGS } from "./Quiz/flagsData";
import { FLAG_FACTS } from "./Quiz/flagFacts";
import { CAPITALS } from "./Quiz/capitalsData";
import { CAPITAL_FACTS } from "./Quiz/capitalFacts";
import { LOGOS2 } from "./Quiz/logos2Data";
import { FLAGS2 } from "./Quiz/flags2Data";
import { FLAG2_FACTS } from "./Quiz/flag2Facts";
import { CAPITALS2 } from "./Quiz/capitals2Data";
import { CAPITAL2_FACTS } from "./Quiz/capital2Facts";
import { EMOJI_MOVIES } from "./Quiz/emojiMoviesData";
import { EMOJI_MOVIE_FACTS } from "./Quiz/emojiMovieFacts";
import { CARLOGOS } from "./Quiz/carLogosData";
import { CARLOGO_FACTS } from "./Quiz/carLogoFacts";
import { EMOJI_FOODS } from "./Quiz/emojiFoodsData";
import { EMOJI_FOOD_FACTS } from "./Quiz/emojiFoodFacts";
import { EMOJI_SONGS } from "./Quiz/emojiSongsData";
import { EMOJI_SONG_FACTS } from "./Quiz/emojiSongFacts";
import { TECHLOGOS } from "./Quiz/techLogosData";
import { TECHLOGO_FACTS } from "./Quiz/techLogoFacts";
import { ThemePreview } from "./Quiz/themePreview";
import { FlagQuizGS, FLAG_FRAMES, FlagQuizGSSample, FLAG_SAMPLE_FRAMES } from "./Quiz/flags";
import { GsThumb } from "./Quiz/gsthumb";
import { CapitalQuizGS, CAPITAL_FRAMES } from "./Quiz/capitals";
import { CountryQuizGS, COUNTRY_FRAMES } from "./Quiz/countries";
import { ProfileLogo, Banner, LogoLockupImg, Watermark } from "./Brand/guesssync";
import { Thumb } from "./Quiz/thumbnail";
import { COUNTRIES, buildTimeline } from "./Quiz/data";
import { video } from "./Mnbety/theme";

const quizSampleCountries = COUNTRIES.slice(0, 3);

export const RemotionRoot = () => {
  return (
    <>
      <Composition
        id="MnbetyIntro"
        component={MnbetyIntro}
        durationInFrames={TOTAL_FRAMES}
        fps={video.fps}
        width={video.width}
        height={video.height}
      />
      <Composition
        id="MnbetyHost"
        component={MnbetyHost}
        durationInFrames={HOST_FRAMES}
        fps={video.fps}
        width={video.width}
        height={video.height}
      />
      <Composition
        id="MnbetyCareer"
        component={MnbetyCareer}
        durationInFrames={CAREER_FRAMES}
        fps={30}
        width={1920}
        height={1080}
      />
      <Composition
        id="MnbetyReel"
        component={MnbetyReel}
        durationInFrames={REEL_FRAMES}
        fps={30}
        width={1080}
        height={1920}
      />
      <Composition
        id="MnbetyCourseIntroEnglish"
        component={MnbetyCourseIntroEnglish}
        durationInFrames={COURSE_INTRO_ENGLISH_FRAMES}
        fps={25}
        width={1920}
        height={1080}
      />
      <Composition
        id="FlagQuizSample"
        component={FlagQuiz}
        durationInFrames={buildTimeline(quizSampleCountries).total}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ countries: quizSampleCountries }}
      />
      <Composition id="LogoPreview" component={LogoPreview} durationInFrames={90} fps={30} width={1920} height={1080} />
      <Composition id="ThumbFlags" component={Thumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "flags" }} />
      <Composition id="ThumbPlayers" component={Thumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "players" }} />
      <Composition id="PlayerQuizSample" component={PlayerQuizSample} durationInFrames={PLAYER_SAMPLE_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="LogoQuizSample" component={LogoQuizSample} durationInFrames={LOGO_SAMPLE_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="LogoQuiz" component={LogoQuiz} durationInFrames={LOGO_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="FlagQuizGSSample" component={FlagQuizGSSample} durationInFrames={FLAG_SAMPLE_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="FlagQuizGS" component={FlagQuizGS} durationInFrames={FLAG_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbLogo" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "logos", items: ["google", "mcdonalds", "instagram", "adidas", "spotify", "ferrari"] }} />
      <Composition id="ThumbFlag" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "flags", items: ["us", "jp", "gb", "ca", "br", "fr"] }} />
      <Composition id="ThumbCapital" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "capitals", items: ["fr", "jp", "eg"] }} />
      <Composition id="ThumbCountry" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "countries", items: ["br", "au", "jp"] }} />
      <Composition id="ThumbLogo2" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "logos", items: ["apple", "youtube", "nike", "samsung", "visa", "mastercard"] }} />
      <Composition id="LogoQuiz2" component={LogoQuiz2} durationInFrames={LOGO2_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbFlag2" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "flags", items: ["ps", "jm", "tw"] }} />
      <Composition id="ThumbFlags2V2" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "flags", grid: ["kw", "kz", "?", "uy", "?", "lt", "?", "tn", "ge"], line1: "CAN YOU NAME ALL", word: "FLAG?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbCapital2V2" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "flags", grid: ["sy", "ge", "?", "jm", "?", "az", "?", "tn", "lt"], line1: "CAN YOU NAME ALL", word: "CAPITAL?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbCapitalV2" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "flags", grid: ["fr", "jp", "?", "br", "?", "eg", "?", "de", "in"], line1: "CAN YOU NAME ALL", word: "CAPITAL?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbEmojiMovie" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F981", "1F6A2", "?", "1F988", "?", "1F996", "?", "1F47D", "1F916"], line1: "CAN YOU NAME ALL", word: "EMOJI?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbCarLogos" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "carlogos", grid: ["ferrari", "bmw", "?", "toyota", "?", "porsche", "?", "audi", "tesla"], line1: "CAN YOU NAME ALL", word: "CAR?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbEmojiFood" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F355", "1F354", "?", "1F35F", "?", "1F35C", "?", "1F32E", "1F369"], line1: "CAN YOU NAME ALL", word: "EMOJI?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbEmojiSong" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F3B8", "1F3A4", "?", "1F57A", "?", "1F483", "?", "1F3B9", "1F451"], line1: "CAN YOU NAME ALL", word: "EMOJI?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbTechLogos" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "logos", grid: ["notion", "figma", "?", "python", "?", "react", "?", "docker", "cloudflare"], line1: "CAN YOU NAME ALL", word: "LOGO?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="FlagQuiz2GS" component={FlagQuiz2GS} durationInFrames={FLAG2_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbCapital2" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "capitals", items: ["ge", "am", "az"] }} />
      <Composition id="CapitalQuiz2GS" component={CapitalQuiz2GS} durationInFrames={CAPITAL2_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbLogo3" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "logos", items: ["cocacola", "playstation", "bmw", "netflix", "whatsapp", "tiktok"] }} />
      <Composition id="LogoQuiz3" component={LogoQuiz3} durationInFrames={LOGO3_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbShape" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "shapes", items: ["it", "jp", "au"] }} />
      <Composition id="ShapeQuizGS" component={ShapeQuizGS} durationInFrames={SHAPE_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbLogo4" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "logos", items: ["safari", "opera", "nokia", "motorola", "lyft", "beats"] }} />
      <Composition id="LogoQuiz4" component={LogoQuiz4} durationInFrames={LOGO4_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbCountry2" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "countries", items: ["ge", "sn", "tw"] }} />
      <Composition id="CountryQuiz2GS" component={CountryQuiz2GS} durationInFrames={COUNTRY2_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbShape2" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "shapes", items: ["cl", "no", "gb"] }} />
      <Composition id="ShapeQuiz2GS" component={ShapeQuiz2GS} durationInFrames={SHAPE2_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbAnimal" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "animals", items: ["lion", "tiger", "elephant", "giraffe", "zebra", "penguin"] }} />
      <Composition id="AnimalQuiz" component={AnimalQuiz} durationInFrames={ANIMAL_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbFood" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "foods", items: ["pizza", "sushi", "hamburger", "taco", "donut", "ramen"] }} />
      <Composition id="ThumbClub" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "clubs", items: ["real-madrid", "barcelona", "liverpool", "bayern-munich", "ac-milan", "manchester-united"] }} />
      <Composition id="FoodQuiz" component={FoodQuiz} durationInFrames={FOOD_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbDog" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "dogs", items: ["goldenretriever", "germanshepherd", "husky", "pug", "chihuahua", "dalmatian"] }} />
      <Composition id="DogQuiz" component={DogQuiz} durationInFrames={DOG_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbLandmark" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "landmarks", items: ["fr", "br", "in-taj"] }} />
      <Composition id="LandmarkQuiz" component={LandmarkQuiz} durationInFrames={LANDMARK_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbCar" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "cars", items: ["ford-mustang", "lamborghini-aventador", "vw-beetle", "ferrari-f40", "porsche-911", "mini-cooper"] }} />
      <Composition id="CarQuiz" component={CarQuiz} durationInFrames={CAR_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbPainting" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "paintings", items: ["mona-lisa", "the-scream", "girl-with-a-pearl-earring", "the-birth-of-venus", "american-gothic", "the-night-watch"] }} />
      <Composition id="PaintingQuiz" component={PaintingQuiz} durationInFrames={PAINTING_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbBird" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "birds", items: ["bald-eagle", "barn-owl", "emperor-penguin", "greater-flamingo", "indian-peafowl", "common-ostrich"] }} />
      <Composition id="BirdQuiz" component={BirdQuiz} durationInFrames={BIRD_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbSea" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "sea", items: ["great-white-shark", "orca", "common-octopus", "green-sea-turtle", "clownfish", "manta-ray"] }} />
      <Composition id="SeaQuiz" component={SeaQuiz} durationInFrames={SEA_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbFruits" component={GsThumb} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "fruits", items: ["banana", "strawberry", "watermelon", "avocado", "carrot", "pineapple"] }} />
      <Composition id="FruitsQuiz" component={FruitsQuiz} durationInFrames={FRUITS_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbFruitsV2" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ folder: "fruits", grid: ["strawberry", "corn", "?", "carrot", "?", "broccoli", "?", "tomato", "dragon-fruit"], line1: "CAN YOU NAME ALL", word: "FRUIT OR VEG?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbFlowersV2" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "flowers", grid: ["sunflower", "rose", "?", "tulip", "?", "orchid", "?", "hibiscus", "lotus"], line1: "CAN YOU NAME ALL", word: "FLOWER?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="FruitsV2Quiz" component={FruitsV2Quiz} durationInFrames={FRUITSV2_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ShortV2Test" component={ShortV2Quiz} durationInFrames={SHORTV2_FRAMES} fps={30} width={1080} height={1920} defaultProps={{ items: ANIMALS, mode: "animals", title: "Guess the Animal", part: 0 }} />
      <Composition id="ButterfliesV2Quiz" component={ButterfliesV2Quiz} durationInFrames={BUTTERFLIESV2_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbButterfliesV2" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "butterflies", word: "BUTTERFLY?", grid: ["monarch", "blue-morpho", "?", "atlas-moth", "?", "luna-moth", "?", "peacock-butterfly", "zebra-longwing"] }} />
      <Composition id="SnakesV2Quiz" component={SnakesV2Quiz} durationInFrames={SNAKESV2_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ThumbSnakesV2" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "snakes", word: "SNAKE?", wordImg: "brand/word3d-snake.png", grid: ["king-cobra", "green-tree-python", "?", "gaboon-viper", "?", "corn-snake", "?", "eyelash-viper", "eastern-coral-snake"] }} />
      <Composition id="ThumbSnakesV3" component={GsThumbV3} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "snakes", word: "SNAKE?", headline: "NAME ALL 100?", grid: ["king-cobra", "eyelash-viper", "?", "eastern-coral-snake"] }} />
      <Composition id="Word3D" component={Word3D} durationInFrames={1} fps={30} width={1000} height={380} defaultProps={{ word: "LOGO?", fontUrl: "fonts/helvetiker_bold.typeface.json" }} />
      <Composition id="E18Quiz" component={QuizV2} durationInFrames={quizFrames(E18CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E18CFG }} />
      <Composition id="E01Quiz" component={QuizV2} durationInFrames={quizFrames(E01CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E01CFG }} />
      <Composition id="E02Quiz" component={QuizV2} durationInFrames={quizFrames(E02CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E02CFG }} />
      <Composition id="E06Quiz" component={QuizV2} durationInFrames={quizFrames(E06CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E06CFG }} />
      <Composition id="E03Quiz" component={QuizV2} durationInFrames={quizFrames(E03CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E03CFG }} />
      <Composition id="E05Quiz" component={QuizV2} durationInFrames={quizFrames(E05CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E05CFG }} />
      <Composition id="E08Quiz" component={QuizV2} durationInFrames={quizFrames(E08CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E08CFG }} />
      <Composition id="E14Quiz" component={QuizV2} durationInFrames={quizFrames(E14CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E14CFG }} />
      <Composition id="E04Quiz" component={QuizV2} durationInFrames={quizFrames(E04CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E04CFG }} />
      <Composition id="E17Quiz" component={QuizV2} durationInFrames={quizFrames(E17CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E17CFG }} />
      <Composition id="E15Quiz" component={QuizV2} durationInFrames={quizFrames(E15CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E15CFG }} />
      <Composition id="E19Quiz" component={QuizV2} durationInFrames={quizFrames(E19CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E19CFG }} />
      <Composition id="E20Quiz" component={QuizV2} durationInFrames={quizFrames(E20CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E20CFG }} />
      <Composition id="E21Quiz" component={QuizV2} durationInFrames={quizFrames(E21CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E21CFG }} />
      <Composition id="E09Quiz" component={QuizV2} durationInFrames={quizFrames(E09CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E09CFG }} />
      <Composition id="E10Quiz" component={QuizV2} durationInFrames={quizFrames(E10CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E10CFG }} />
      <Composition id="E12Quiz" component={QuizV2} durationInFrames={quizFrames(E12CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E12CFG }} />
      <Composition id="E11Quiz" component={QuizV2} durationInFrames={quizFrames(E11CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E11CFG }} />
      <Composition id="E16Quiz" component={QuizV2} durationInFrames={quizFrames(E16CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E16CFG }} />
      <Composition id="E07Quiz" component={QuizV2} durationInFrames={quizFrames(E07CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E07CFG }} />
      <Composition id="E24Quiz" component={QuizV2} durationInFrames={quizFrames(E24CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E24CFG }} />
      <Composition id="E26Quiz" component={QuizV2} durationInFrames={quizFrames(E26CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E26CFG }} />
      <Composition id="E25Quiz" component={QuizV2} durationInFrames={quizFrames(E25CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E25CFG }} />
      <Composition id="E27Quiz" component={QuizV2} durationInFrames={quizFrames(E27CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E27CFG }} />
      <Composition id="E28Quiz" component={QuizV2} durationInFrames={quizFrames(E28CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E28CFG }} />
      <Composition id="E30Quiz" component={QuizV2} durationInFrames={quizFrames(E30CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E30CFG }} />
      <Composition id="ThumbLogosV4" component={GsThumbV4} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "logos", word: "LOGO?", wordImg: "brand/word3d-logo.png", grid: ["apple", "nike", "?", "mcdonalds", "?", "cocacola", "?", "netflix", "spotify"] }} />
      <Composition id="ThumbSnakesV4" component={GsThumbV4} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "snakes", word: "SNAKE?", wordImg: "brand/word3d-snake.png", grid: ["king-cobra", "green-tree-python", "?", "gaboon-viper", "?", "corn-snake", "?", "eyelash-viper", "eastern-coral-snake"] }} />
      {/* ── الشورتس العمودية (1080×1920) — 5 شورتات لكل حلقة (part 0..4، بلا تكرار) ── */}
      {[
        { ep: "E01", items: LOGOS, mode: "logos", title: "Guess the Logo", v2: true },
        { ep: "E02", items: FLAGS, mode: "flags", title: "Guess the Flag", v2: true },
        { ep: "E03", items: ANIMALS, mode: "animals", title: "Guess the Animal", v2: true },
        { ep: "E04", items: CLUBS, mode: "clubs", title: "Guess the Football Club", v2: true },
        { ep: "E05", items: LOGOS2, mode: "logos", title: "Guess the Logo 2", v2: true },
        { ep: "E06", items: FLAGS2, mode: "flags", title: "Guess the Flag 2", v2: true },
        { ep: "E07", items: CAPITALS, mode: "capitals", title: "Guess the Capital", v2: true },
        { ep: "E08", items: LOGOS3, mode: "logos", title: "Guess the Logo 3", v2: true },
        { ep: "E09", items: FLOWERS, mode: "flowers", title: "Guess the Flower", v2: true },
        { ep: "E10", items: LOGOS4, mode: "logos", title: "Guess the Logo 4", v2: true },
        { ep: "E11", items: SHAPES2, mode: "shapes", title: "Guess the Country 2", v2: true },
        { ep: "E12", items: SHAPES1, mode: "shapes", title: "Guess the Country", v2: true },
        { ep: "E13", items: DINOS, mode: "dinos", title: "Guess the Dinosaur", v2: true },
        { ep: "E14", items: FOODS, mode: "foods", title: "Guess the Food", v2: true },
        { ep: "E15", items: DOGS, mode: "dogs", title: "Guess the Dog Breed", v2: true },
        { ep: "E16", items: LANDMARKS, mode: "landmarks", title: "Guess the Landmark", v2: true },
        { ep: "E17", items: CARS, mode: "cars", title: "Guess the Car", v2: true },
        { ep: "E18", items: PAINTINGS, mode: "paintings", title: "Guess the Painting", v2: true },
        { ep: "E19", items: BIRDS, mode: "birds", title: "Guess the Bird", v2: true },
        { ep: "E20", items: SEA, mode: "sea", title: "Guess the Sea Creature", v2: true },
        { ep: "E21", items: FRUITS, mode: "fruits", title: "Guess the Fruit or Veg", v2: true },
        { ep: "E22", items: BUTTERFLIES, mode: "butterflies", title: "Guess the Butterfly", v2: true },
        { ep: "E23", items: SNAKES, mode: "snakes", title: "Guess the Snake", v2: true },
        { ep: "E24", items: CAPITALS2, mode: "capitals", title: "Guess the Capital 2", v2: true },
        { ep: "E26", items: EMOJI_MOVIES, mode: "movies", title: "Guess the Movie by Emoji", v2: true },
        { ep: "E25", items: CARLOGOS, mode: "carlogos", title: "Guess the Car Logo", v2: true },
        { ep: "E27", items: EMOJI_FOODS, mode: "efoods", title: "Guess the Food by Emoji", v2: true },
        { ep: "E28", items: EMOJI_SONGS, mode: "esongs", title: "Guess the Song by Emoji", v2: true },
        { ep: "E30", items: TECHLOGOS, mode: "logos", title: "Guess the Tech Logo", v2: true },
      ].flatMap((e) =>
        [0, 1, 2, 3, 4].map((part) => (
          <Composition key={`${e.ep}-${part}`} id={`Short-${e.ep}-${part + 1}`} component={e.v2 ? ShortV2Quiz : ShortQuiz} durationInFrames={e.v2 ? SHORTV2_FRAMES : SHORT_FRAMES} fps={30} width={1080} height={1920} defaultProps={{ items: e.items, mode: e.mode, title: e.title, part }} />
        ))
      )}
      <Composition id="CapitalQuizGS" component={CapitalQuizGS} durationInFrames={CAPITAL_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="CountryQuizGS" component={CountryQuizGS} durationInFrames={COUNTRY_FRAMES} fps={30} width={1920} height={1080} />
      <Composition id="ProfileLogo" component={ProfileLogo} durationInFrames={1} fps={30} width={800} height={800} />
      <Composition id="Banner" component={Banner} durationInFrames={1} fps={30} width={2048} height={1152} />
      <Composition id="LogoLockup" component={LogoLockupImg} durationInFrames={1} fps={30} width={1500} height={480} />
      <Composition id="Watermark" component={Watermark} durationInFrames={1} fps={30} width={150} height={150} />
      {["signature", "midnight", "aurora", "studio", "gameshow"].map((th) => (
        <Composition key={th} id={`Theme-${th}`} component={ThemePreview} durationInFrames={1} fps={30} width={1920} height={1080} defaultProps={{ theme: th }} />
      ))}
      <Composition id="PlayerQuiz" component={PlayerQuiz} durationInFrames={PLAYER_FRAMES} fps={30} width={1920} height={1080} />
      {["rays", "bokeh", "synth", "aurora"].map((bg) => (
        <Composition
          key={bg}
          id={`BgOpt-${bg}`}
          component={BgPreview}
          durationInFrames={90}
          fps={30}
          width={1920}
          height={1080}
          defaultProps={{ bg }}
        />
      ))}
      <Composition
        id="FlagQuiz"
        component={FlagQuiz}
        durationInFrames={buildTimeline(COUNTRIES).total}
        fps={30}
        width={1920}
        height={1080}
        defaultProps={{ countries: COUNTRIES }}
      />
    </>
  );
};
