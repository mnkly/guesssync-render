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
import { FOODS2 } from "./Quiz/foods2Data";
import { FOODS2_FACTS } from "./Quiz/foods2Facts";
import { CLUBS } from "./Quiz/clubsData";
import { CLUB_FACTS } from "./Quiz/clubFacts";
import { CLUBBADGES } from "./Quiz/clubBadgesData";
import { CLUBBADGE_FACTS } from "./Quiz/clubBadgeFacts";
import { DogQuiz, DOG_FRAMES } from "./Quiz/dogs";
import { DOGS } from "./Quiz/dogsData";
import { DOG_FACTS } from "./Quiz/dogFacts";
import { DOGS2 } from "./Quiz/dogs2Data";
import { DOGS2_FACTS } from "./Quiz/dogs2Facts";
import { LandmarkQuiz, LANDMARK_FRAMES } from "./Quiz/landmarks";
import { LANDMARKS } from "./Quiz/landmarksData";
import { LANDMARK_FACTS } from "./Quiz/landmarkFacts";
import { CarQuiz, CAR_FRAMES } from "./Quiz/cars";
import { CARS } from "./Quiz/carsData";
import { CAR_FACTS } from "./Quiz/carFacts";
import { CARS2 } from "./Quiz/cars2Data";
import { CARS2_FACTS } from "./Quiz/cars2Facts";
import { PaintingQuiz, PAINTING_FRAMES } from "./Quiz/paintings";
import { PAINTINGS } from "./Quiz/paintingsData";
import { PAINTING_FACTS } from "./Quiz/paintingFacts";
import { BirdQuiz, BIRD_FRAMES } from "./Quiz/birds";
import { BIRDS } from "./Quiz/birdsData";
import { BIRD_FACTS } from "./Quiz/birdFacts";
import { BIRDS2 } from "./Quiz/birds2Data";
import { BIRDS2_FACTS } from "./Quiz/birds2Facts";
import { SeaQuiz, SEA_FRAMES } from "./Quiz/sea";
import { SEA } from "./Quiz/seaData";
import { SEA_FACTS } from "./Quiz/seaFacts";
import { SEA2 } from "./Quiz/sea2Data";
import { SEA2_FACTS } from "./Quiz/sea2Facts";
import { FruitsQuiz, FRUITS_FRAMES } from "./Quiz/fruits";
import { FRUITS } from "./Quiz/fruitsData";
import { FRUIT_FACTS } from "./Quiz/fruitFacts";
import { FLOWER_FACTS } from "./Quiz/flowerFacts";
import { GsThumbV2, GsThumbRebus } from "./Quiz/gsthumb2";
import { RebusDemo } from "./Quiz/rebusdemo";
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
const E72CFG = { items: LOGOS5, facts: LOGOS5_FACTS, topicWord: "LOGO", topicPlural: "LOGOS", dir: "logos", ext: "svg", fit: "contain", voPrefix: "nm-", nameField: "name", introVo: "vo-intro-logo", coldSlug: "cnn" };
const E77CFG = { items: LOGOS6, facts: LOGOS6_FACTS, topicWord: "LOGO", topicPlural: "LOGOS", dir: "logos", ext: "svg", fit: "contain", voPrefix: "nm-", nameField: "name", introVo: "vo-intro-logo", coldSlug: "meta" };
const E31CFG = { items: EMOJI_GAMES, facts: EMOJI_GAME_FACTS, topicWord: "GAME", topicPlural: "GAMES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "eg-", introVo: "vo-intro-vgame", coldSlug: "" };
const E13CFG = { items: DINOS, facts: DINO_FACTS, topicWord: "DINOSAUR", topicPlural: "DINOSAURS", dir: "dinos", ext: "jpg", fit: "cover", voPrefix: "dn-", nameField: "name", introVo: "vo-intro-dino", coldSlug: "" };
const E32CFG = { items: EMOJI_COUNTRIES, facts: EMOJI_COUNTRY_FACTS, topicWord: "COUNTRY", topicPlural: "COUNTRIES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "ec-", introVo: "vo-intro-country", coldSlug: "" };
const E29CFG = { items: GAMINGLOGOS, facts: GAMINGLOGO_FACTS, topicWord: "GAME", topicPlural: "GAMES", dir: "gaming", ext: "png", fit: "contain", voPrefix: "gm-", nameField: "name", introVo: "vo-intro-game", coldSlug: "" };
const E33CFG = { items: EMOJI_TV, facts: EMOJI_TV_FACTS, topicWord: "TV SHOW", topicPlural: "TV SHOWS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "et-", introVo: "vo-intro-tv", coldSlug: "" };
const E35CFG = { items: EMOJI_BRANDS, facts: EMOJI_BRAND_FACTS, topicWord: "BRAND", topicPlural: "BRANDS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "eb-", introVo: "vo-intro-brand", coldSlug: "" };
const E37CFG = { items: EMOJI_BOOKS, facts: EMOJI_BOOK_FACTS, topicWord: "BOOK", topicPlural: "BOOKS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "bk-", introVo: "vo-intro-book", coldSlug: "" };
const E36CFG = { items: FISH, facts: FISH_FACTS, topicWord: "FISH", topicPlural: "FISH", dir: "fish", ext: "jpg", fit: "cover", voPrefix: "fh-", nameField: "name", introVo: "vo-intro-fish", coldSlug: "clownfish" };
const E84CFG = { items: FISH2, facts: FISH2_FACTS, topicWord: "FISH", topicPlural: "FISH", dir: "fish2", ext: "jpg", fit: "cover", voPrefix: "fs-", nameField: "name", introVo: "vo-intro-fish2", coldSlug: "tiger-shark" };
const E64CFG = { items: COCKTAILS, facts: COCKTAIL_FACTS, topicWord: "COCKTAIL", topicPlural: "COCKTAILS", dir: "cocktails", ext: "jpg", fit: "cover", voPrefix: "ck-", nameField: "name", introVo: "vo-intro-cocktail", coldSlug: "margarita" };
const E65CFG = { items: BREADS, facts: BREAD_FACTS, topicWord: "BREAD", topicPlural: "BREADS", dir: "breads", ext: "jpg", fit: "cover", voPrefix: "br-", nameField: "name", introVo: "vo-intro-bread", coldSlug: "baguette" };
const E62CFG = { items: NUTS, facts: NUT_FACTS, topicWord: "NUT OR SEED", topicPlural: "NUTS & SEEDS", dir: "nuts", ext: "jpg", fit: "cover", voPrefix: "nt-", nameField: "name", introVo: "vo-intro-nut", coldSlug: "almond" };
const E63CFG = { items: CACTI, facts: CACTUS_FACTS, topicWord: "CACTUS OR SUCCULENT", topicPlural: "CACTI & SUCCULENTS", dir: "cacti", ext: "jpg", fit: "cover", voPrefix: "cx-", nameField: "name", introVo: "vo-intro-cactus", coldSlug: "saguaro" };
const E61CFG = { items: DESSERTS, facts: DESSERT_FACTS, topicWord: "DESSERT", topicPlural: "DESSERTS", dir: "desserts", ext: "jpg", fit: "cover", voPrefix: "ds-", nameField: "name", introVo: "vo-intro-dessert", coldSlug: "chocolatecake" };
const E53CFG = { items: KITCHEN, facts: KITCHEN_FACTS, topicWord: "KITCHEN UTENSIL", topicPlural: "KITCHEN UTENSILS", dir: "kitchen", ext: "jpg", fit: "cover", voPrefix: "kt-", nameField: "name", introVo: "vo-intro-kitchen", coldSlug: "whisk" };
const E60CFG = { items: SPICES, facts: SPICE_FACTS, topicWord: "HERB OR SPICE", topicPlural: "HERBS & SPICES", dir: "spices", ext: "jpg", fit: "cover", voPrefix: "sc-", nameField: "name", introVo: "vo-intro-spice", coldSlug: "basil" };
const E41CFG = { items: PASTA, facts: PASTA_FACTS, topicWord: "PASTA", topicPlural: "PASTA", dir: "pasta", ext: "jpg", fit: "cover", voPrefix: "pa-", nameField: "name", introVo: "vo-intro-pasta", coldSlug: "spaghetti" };
const E49CFG = { items: CHEESES, facts: CHEESE_FACTS, topicWord: "CHEESE", topicPlural: "CHEESES", dir: "cheeses", ext: "jpg", fit: "cover", voPrefix: "ch-", nameField: "name", introVo: "vo-intro-cheese", coldSlug: "cheddar" };
const E58CFG = { items: TRAINS, facts: TRAIN_FACTS, topicWord: "TRAIN", topicPlural: "TRAINS", dir: "trains", ext: "jpg", fit: "cover", voPrefix: "tn-", nameField: "name", introVo: "vo-intro-train", coldSlug: "steamlocomotive" };
const E59CFG = { items: PRIMATES, facts: PRIMATE_FACTS, topicWord: "PRIMATE", topicPlural: "PRIMATES", dir: "primates", ext: "jpg", fit: "cover", voPrefix: "pr-", nameField: "name", introVo: "vo-intro-primate", coldSlug: "chimpanzee" };
const E55CFG = { items: BOATS, facts: BOAT_FACTS, topicWord: "BOAT", topicPlural: "BOATS", dir: "boats", ext: "jpg", fit: "cover", voPrefix: "bt-", nameField: "name", introVo: "vo-intro-boat", coldSlug: "sailboat" };
const E52CFG = { items: SHELLS, facts: SHELL_FACTS, topicWord: "SEASHELL", topicPlural: "SEASHELLS", dir: "shells", ext: "jpg", fit: "cover", voPrefix: "sh-", nameField: "name", introVo: "vo-intro-shell", coldSlug: "scallop" };
const E50CFG = { items: MUSHROOMS, facts: MUSHROOM_FACTS, topicWord: "MUSHROOM", topicPlural: "MUSHROOMS", dir: "mushrooms", ext: "jpg", fit: "cover", voPrefix: "mu-", nameField: "name", introVo: "vo-intro-mushroom", coldSlug: "flyagaric" };
const E54CFG = { items: AIRCRAFT, facts: AIRCRAFT_FACTS, topicWord: "AIRCRAFT", topicPlural: "AIRCRAFT", dir: "aircraft", ext: "jpg", fit: "cover", voPrefix: "ac-", nameField: "name", introVo: "vo-intro-aircraft", coldSlug: "concorde" };
const E51CFG = { items: SPACE, facts: SPACE_FACTS, topicWord: "SPACE OBJECT", topicPlural: "SPACE OBJECTS", dir: "space", ext: "jpg", fit: "cover", voPrefix: "sp-", nameField: "name", introVo: "vo-intro-space", coldSlug: "saturn" };
const E47CFG = { items: SPORTS, facts: SPORT_FACTS, topicWord: "SPORT", topicPlural: "SPORTS", dir: "sports", ext: "jpg", fit: "cover", voPrefix: "sr-", nameField: "name", introVo: "vo-intro-sport", coldSlug: "soccer" };
const E46CFG = { items: TREES, facts: TREE_FACTS, topicWord: "TREE", topicPlural: "TREES", dir: "trees", ext: "jpg", fit: "cover", voPrefix: "tr-", nameField: "name", introVo: "vo-intro-tree", coldSlug: "oak" };
const E48CFG = { items: TOOLS, facts: TOOL_FACTS, topicWord: "TOOL", topicPlural: "TOOLS", dir: "tools", ext: "jpg", fit: "cover", voPrefix: "tl-", nameField: "name", introVo: "vo-intro-tool", coldSlug: "hammer" };
const E70CFG = { items: ANIMALS2, facts: ANIMALS2_FACTS, topicWord: "ANIMAL", topicPlural: "ANIMALS", dir: "animals2", ext: "jpg", fit: "cover", voPrefix: "a2-", nameField: "name", introVo: "vo-intro-animals2", coldSlug: "hippo" };
const E76CFG = { items: ANIMALS3, facts: ANIMALS3_FACTS, topicWord: "ANIMAL", topicPlural: "ANIMALS", dir: "animals3", ext: "jpg", fit: "cover", voPrefix: "a3-", nameField: "name", introVo: "vo-intro-animal3", coldSlug: "blackbear" };
const E71CFG = { items: LANDMARKS2, facts: LANDMARKS2_FACTS, topicWord: "LANDMARK", topicPlural: "LANDMARKS", dir: "landmarks2", ext: "jpg", fit: "cover", voPrefix: "l2-", nameField: "name", introVo: "vo-intro-landmarks2", coldSlug: "sphinx" };
const E45CFG = { items: REPTILES, facts: REPTILE_FACTS, topicWord: "REPTILE", topicPlural: "REPTILES", dir: "reptiles", ext: "jpg", fit: "cover", voPrefix: "rp-", nameField: "name", introVo: "vo-intro-reptile", coldSlug: "komododragon" };
const E92CFG = { items: REPTILES2, facts: REPTILES2_FACTS, topicWord: "REPTILE", topicPlural: "REPTILES", dir: "reptiles2", ext: "jpg", fit: "cover", voPrefix: "rp2-", nameField: "name", introVo: "vo-intro-reptiles2", coldSlug: "asianwatermonitor", theme: 1 };
const E100CFG = { items: REPTILEZOOM, facts: REPTILE_FACTS, topicWord: "ZOOMED REPTILE", topicPlural: "REPTILES", dir: "reptiles", ext: "jpg", fit: "cover", voPrefix: "rz-", nameField: "name", introVo: "vo-intro-reptilezoom", coldSlug: "komododragon", zoom: { scale: 3.0 }, theme: 2 };
const E90CFG = { items: SILHOUETTES, facts: SILHOUETTE_FACTS, topicWord: "ANIMAL", topicPlural: "ANIMALS", dir: "silhouette", ext: "png", fit: "contain", voPrefix: "sl-", nameField: "name", introVo: "vo-intro-silhouette", coldSlug: "elephant", theme: 1 };
const E114CFG = { items: DINO_SILHOUETTES, facts: DINO_SILHOUETTES_FACTS, topicWord: "DINOSAUR", topicPlural: "DINOSAURS", dir: "dinosilhouette", ext: "png", fit: "contain", voPrefix: "dz-", nameField: "name", introVo: "vo-intro-dinosilhouette", coldSlug: "trex", theme: 3 };
const E115CFG = { items: SCRAMBLED, facts: SCRAMBLED_FACTS, topicWord: "COUNTRY", topicPlural: "COUNTRIES", clueType: "text", clueField: "scrambled", voPrefix: "scr-", nameField: "name", introVo: "vo-intro-scrambled", coldSlug: "france", theme: 3 };
const E116CFG = { items: NO_VOWELS, facts: NO_VOWELS_FACTS, topicWord: "COUNTRY", topicPlural: "COUNTRIES", clueType: "text", clueField: "novowels", voPrefix: "nvw-", nameField: "name", introVo: "vo-intro-novowels", coldSlug: "france", theme: 4 };
const E117CFG = { items: US_STATES, facts: US_STATES_FACTS, topicWord: "STATE", topicPlural: "STATES", dir: "usstates", ext: "svg", fit: "contain", voPrefix: "usst-", nameField: "name", introVo: "vo-intro-usstates", coldSlug: "california", theme: 4 };
const E118CFG = { items: CAPITAL_SCRAMBLED, facts: CAPITAL_SCRAMBLED_FACTS, topicWord: "CAPITAL", topicPlural: "CAPITALS", clueType: "text", clueField: "scrambled", voPrefix: "cscr-", nameField: "name", introVo: "vo-intro-capitalscrambled", coldSlug: "paris", theme: 4 };
const E119CFG = { items: REVERSED, facts: REVERSED_FACTS, topicWord: "COUNTRY", topicPlural: "COUNTRIES", clueType: "text", clueField: "reversed", voPrefix: "rev-", nameField: "name", introVo: "vo-intro-reversed", coldSlug: "france", theme: 4 };
const E120CFG = { items: USSTATE_SCRAMBLED, facts: USSTATE_SCRAMBLED_FACTS, topicWord: "STATE", topicPlural: "STATES", clueType: "text", clueField: "scrambled", voPrefix: "ussc-", nameField: "name", introVo: "vo-intro-usstatescrambled", coldSlug: "california", theme: 4 };
const E121CFG = { items: MISSING_LETTERS, facts: MISSING_LETTERS_FACTS, topicWord: "COUNTRY", topicPlural: "COUNTRIES", clueType: "text", clueField: "blanked", voPrefix: "mis-", nameField: "name", introVo: "vo-intro-missingletters", coldSlug: "france", theme: 4 };
// E122 «Guess the Word by Emoji» (emoji REBUS) — Fluent-3D emoji SEQUENCE clue. emojiSeq flag guards the new renderer
// so OpenMoji emoji episodes (isEmoji) are untouched. item.emojis = array of emoji3d slugs; answer = the WORD.
const E122CFG = { items: EMOJI_WORD, facts: EMOJI_WORD_FACTS, topicWord: "WORD", topicPlural: "WORDS", emojiSeq: true, emojiDir: "emoji3d", emojiExt: "png", nameField: "answer", slugKey: "slug", voKey: "slug", voPrefix: "ew-", introVo: "vo-intro-emojiword", coldSlug: "honeymoon", theme: 4 };
const E123CFG = { items: BRAND_SLOGAN, facts: BRAND_SLOGAN_FACTS, topicWord: "BRAND", topicPlural: "BRANDS", clueType: "text", clueField: "slogan", voPrefix: "bs-", nameField: "name", introVo: "vo-intro-slogan", coldSlug: "nike", theme: 4 };
const E124CFG = { items: EMOJI_SONGS_2, facts: EMOJI_SONG_FACTS_2, topicWord: "SONG", topicPlural: "SONGS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "esg2-", introVo: "vo-intro-song", coldSlug: "", theme: 4 };
const E125CFG = { items: MOVIE_EMOJI_2, facts: MOVIE_EMOJI_2_FACTS, topicWord: "MOVIE", topicPlural: "MOVIES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "me2-", introVo: "vo-intro-movie", coldSlug: "", theme: 4 };
const E126CFG = { items: GAME_EMOJI_2, facts: GAME_EMOJI_2_FACTS, topicWord: "GAME", topicPlural: "GAMES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "eg2-", introVo: "vo-intro-vgame", coldSlug: "", theme: 5 };
const E127CFG = { items: TV_EMOJI_2, facts: TV_EMOJI_2_FACTS, topicWord: "TV SHOW", topicPlural: "TV SHOWS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "et2-", introVo: "vo-intro-tv", coldSlug: "", theme: 5 };
const E128CFG = { items: BOOK_EMOJI_2, facts: BOOK_EMOJI_2_FACTS, topicWord: "BOOK", topicPlural: "BOOKS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "bk2-", introVo: "vo-intro-book", coldSlug: "", theme: 5 };
const E129CFG = { items: BRAND_EMOJI_2, facts: BRAND_EMOJI_2_FACTS, topicWord: "BRAND", topicPlural: "BRANDS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "eb2-", introVo: "vo-intro-brand", coldSlug: "", theme: 5 };
const E130CFG = { items: FOOD_EMOJI_2, facts: FOOD_EMOJI_2_FACTS, topicWord: "FOOD", topicPlural: "FOODS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "ef2-", introVo: "vo-intro-food", coldSlug: "", theme: 5 };
const E131CFG = { items: HERO_EMOJI, facts: HERO_EMOJI_FACTS, topicWord: "SUPERHERO", topicPlural: "SUPERHEROES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "eh2-", introVo: "vo-intro-hero", coldSlug: "", theme: 5 };
const E132CFG = { items: DISNEY_EMOJI, facts: DISNEY_EMOJI_FACTS, topicWord: "DISNEY", topicPlural: "DISNEY CHARACTERS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "ed2-", introVo: "vo-intro-disney", coldSlug: "", theme: 5 };
const E133CFG = { items: ANIME_EMOJI, facts: ANIME_EMOJI_FACTS, topicWord: "ANIME", topicPlural: "ANIME", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "ea2-", introVo: "vo-intro-anime", coldSlug: "", theme: 5 };
const E134CFG = { items: ANIMAL_EMOJI, facts: ANIMAL_EMOJI_FACTS, topicWord: "ANIMAL", topicPlural: "ANIMALS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e134-", introVo: "vo-intro-animal", coldSlug: "", theme: 5 };
const E135CFG = { items: SPORTS_EMOJI, facts: SPORTS_EMOJI_FACTS, topicWord: "SPORT", topicPlural: "SPORTS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e135-", introVo: "vo-intro-sport", coldSlug: "", theme: 5 };
const E136CFG = { items: JOBS_EMOJI, facts: JOBS_EMOJI_FACTS, topicWord: "JOB", topicPlural: "JOBS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e136-", introVo: "vo-intro-job", coldSlug: "", theme: 6 };
const E137CFG = { items: CARTOON_EMOJI, facts: CARTOON_EMOJI_FACTS, topicWord: "CARTOON", topicPlural: "CARTOON CHARACTERS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e137-", introVo: "vo-intro-cartoon", coldSlug: "", theme: 6 };
const E138CFG = { items: FAIRYTALE_EMOJI, facts: FAIRYTALE_EMOJI_FACTS, topicWord: "FAIRY TALE", topicPlural: "FAIRY TALES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e138-", introVo: "vo-intro-fairytale", coldSlug: "", theme: 6 };
const E139CFG = { items: BAND_EMOJI, facts: BAND_EMOJI_FACTS, topicWord: "BAND", topicPlural: "BANDS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e139-", introVo: "vo-intro-band", coldSlug: "", theme: 6 };
const E140CFG = { items: FRUIT_EMOJI, facts: FRUIT_EMOJI_FACTS, topicWord: "FRUIT", topicPlural: "FRUITS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e140-", introVo: "vo-intro-fruit", coldSlug: "", theme: 6 };
const E141CFG = { items: BOARDGAME_EMOJI, facts: BOARDGAME_EMOJI_FACTS, topicWord: "BOARD GAME", topicPlural: "BOARD GAMES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e141-", introVo: "vo-intro-boardgame", coldSlug: "", theme: 6 };
const E142CFG = { items: VEHICLE_EMOJI, facts: VEHICLE_EMOJI_FACTS, topicWord: "VEHICLE", topicPlural: "VEHICLES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e142-", introVo: "vo-intro-vehicle", coldSlug: "", theme: 6 };
const E143CFG = { items: HOLIDAY_EMOJI, facts: HOLIDAY_EMOJI_FACTS, topicWord: "HOLIDAY", topicPlural: "HOLIDAYS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e143-", introVo: "vo-intro-holiday", coldSlug: "", theme: 6 };
const E144CFG = { items: MYTHCREATURE_EMOJI, facts: MYTHCREATURE_EMOJI_FACTS, topicWord: "MYTHICAL CREATURE", topicPlural: "MYTHICAL CREATURES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e144-", introVo: "vo-intro-mythcreature", coldSlug: "", theme: 6 };
const E145CFG = { items: WEATHER_EMOJI, facts: WEATHER_EMOJI_FACTS, topicWord: "WEATHER", topicPlural: "PHENOMENA", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e145-", introVo: "vo-intro-weather", coldSlug: "", theme: 6 };
const E146CFG = { items: MYTHGOD_EMOJI, facts: MYTHGOD_EMOJI_FACTS, topicWord: "ANCIENT GOD", topicPlural: "ANCIENT GODS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e146-", introVo: "vo-intro-ancientgod", coldSlug: "", theme: 6 };
const E147CFG = { items: HOBBY_EMOJI, facts: HOBBY_EMOJI_FACTS, topicWord: "HOBBY", topicPlural: "HOBBIES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e147-", introVo: "vo-intro-hobby", coldSlug: "", theme: 6 };
const E148CFG = { items: CITY_EMOJI, facts: CITY_EMOJI_FACTS, topicWord: "CITY", topicPlural: "CITIES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e148-", introVo: "vo-intro-city", coldSlug: "", theme: 6 };
const E149CFG = { items: DANCE_EMOJI, facts: DANCE_EMOJI_FACTS, topicWord: "DANCE", topicPlural: "DANCES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e149-", introVo: "vo-intro-dance", coldSlug: "", theme: 6 };
const E150CFG = { items: SEACREATURE_EMOJI, facts: SEACREATURE_EMOJI_FACTS, topicWord: "SEA CREATURE", topicPlural: "SEA CREATURES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e150-", introVo: "vo-intro-seacreature", coldSlug: "", theme: 6 };
const E151CFG = { items: CLOTHING_EMOJI, facts: CLOTHING_EMOJI_FACTS, topicWord: "CLOTHING", topicPlural: "CLOTHES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e151-", introVo: "vo-intro-clothing", coldSlug: "", theme: 6 };
const E152CFG = { items: DRINK_EMOJI, facts: DRINK_EMOJI_FACTS, topicWord: "DRINK", topicPlural: "DRINKS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e152-", introVo: "vo-intro-drink", coldSlug: "", theme: 6 };
const E153CFG = { items: GAMECHAR_EMOJI, facts: GAMECHAR_EMOJI_FACTS, topicWord: "GAME CHARACTER", topicPlural: "GAME CHARACTERS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e153-", introVo: "vo-intro-gamechar", coldSlug: "", theme: 6 };
const E154CFG = { items: VILLAIN_EMOJI, facts: VILLAIN_EMOJI_FACTS, topicWord: "VILLAIN", topicPlural: "VILLAINS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e154-", introVo: "vo-intro-villain", coldSlug: "", theme: 6 };
const E155CFG = { items: TOY_EMOJI, facts: TOY_EMOJI_FACTS, topicWord: "TOY", topicPlural: "TOYS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e155-", introVo: "vo-intro-toy", coldSlug: "", theme: 6 };
const E156CFG = { items: ANIMECHAR_EMOJI, facts: ANIMECHAR_EMOJI_FACTS, topicWord: "ANIME CHARACTER", topicPlural: "ANIME CHARACTERS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e156-", introVo: "vo-intro-animechar", coldSlug: "", theme: 6 };
const E157CFG = { items: RHYME_EMOJI, facts: RHYME_EMOJI_FACTS, topicWord: "NURSERY RHYME", topicPlural: "NURSERY RHYMES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e157-", introVo: "vo-intro-rhyme", coldSlug: "", theme: 6 };
const E158CFG = { items: DESSERT_EMOJI, facts: DESSERT_EMOJI_FACTS, topicWord: "DESSERT", topicPlural: "DESSERTS", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "e158-", introVo: "vo-intro-dessert", coldSlug: "", theme: 6 };
const E93CFG = { items: MUSHROOMS2, facts: MUSHROOMS2_FACTS, topicWord: "MUSHROOM", topicPlural: "MUSHROOMS", dir: "mushrooms2", ext: "jpg", fit: "cover", voPrefix: "mu2-", nameField: "name", introVo: "vo-intro-mushroom2", coldSlug: "lobstermushroom", theme: 1 };
const E66CFG = { items: ROCKS, facts: ROCK_FACTS, topicWord: "ROCK", topicPlural: "ROCKS", dir: "rocks", ext: "jpg", fit: "cover", voPrefix: "rk-", nameField: "name", introVo: "vo-intro-rock", coldSlug: "granite" };
// MEGA episodes — variable item count (>100, uneven tiers). Engine is tier-size-agnostic; count displays derive from items.length.
const E94CFG = { items: FLAGS_MEGA, facts: FLAGS_MEGA_FACTS, topicWord: "FLAG", topicPlural: "FLAGS", dir: "flags", ext: "svg", fit: "contain", voPrefix: "fm-", nameField: "name", introVo: "vo-intro-flagsmega", coldSlug: "us", theme: 1 }; // 195 flags (50/49/48/48)
const E95CFG = { items: LOGOS_MEGA, facts: LOGOS_MEGA_FACTS, topicWord: "LOGO", topicPlural: "LOGOS", dir: "logos", ext: "svg", fit: "contain", voPrefix: "nm-", nameField: "name", introVo: "vo-intro-logomega", coldSlug: "google", theme: 1 }; // 300 logos (75/tier)
const E67CFG = { items: HATS, facts: HAT_FACTS, topicWord: "HAT", topicPlural: "HATS", dir: "hats", ext: "jpg", fit: "cover", voPrefix: "ht-", nameField: "name", introVo: "vo-intro-hats", coldSlug: "baseballcap" };
const E68CFG = { items: DRINKS, facts: DRINK_FACTS, topicWord: "DRINK", topicPlural: "DRINKS", dir: "drinks", ext: "jpg", fit: "cover", voPrefix: "dk-", nameField: "name", introVo: "vo-intro-drinks", coldSlug: "espresso" };
const E57CFG = { items: SPIDERS, facts: SPIDER_FACTS, topicWord: "SPIDER", topicPlural: "SPIDERS", dir: "spiders", ext: "jpg", fit: "cover", voPrefix: "sd-", nameField: "name", introVo: "vo-intro-spider", coldSlug: "tarantula" };
const E56CFG = { items: AMPHIBIANS, facts: AMPHIBIAN_FACTS, topicWord: "AMPHIBIAN", topicPlural: "AMPHIBIANS", dir: "amphibians", ext: "jpg", fit: "cover", voPrefix: "am-", nameField: "name", introVo: "vo-intro-amphibian", coldSlug: "axolotl" };
const E43CFG = { items: HORSES, facts: HORSE_FACTS, topicWord: "HORSE BREED", topicPlural: "HORSE BREEDS", dir: "horses", ext: "jpg", fit: "cover", voPrefix: "hr-", nameField: "name", introVo: "vo-intro-horse", coldSlug: "arabian" };
const E44CFG = { items: GEMS, facts: GEM_FACTS, topicWord: "GEMSTONE", topicPlural: "GEMSTONES", dir: "gems", ext: "jpg", fit: "cover", voPrefix: "gem-", nameField: "name", introVo: "vo-intro-gem", coldSlug: "diamond" };
const E42CFG = { items: INSTRUMENTS, facts: INSTRUMENT_FACTS, topicWord: "INSTRUMENT", topicPlural: "INSTRUMENTS", dir: "instruments", ext: "jpg", fit: "cover", voPrefix: "mi-", nameField: "name", introVo: "vo-intro-instrument", coldSlug: "piano" };
const E38CFG = { items: INSECTS, facts: INSECT_FACTS, topicWord: "INSECT", topicPlural: "INSECTS", dir: "insects", ext: "jpg", fit: "cover", voPrefix: "in-", nameField: "name", introVo: "vo-intro-insect", coldSlug: "ladybug" };
const E85CFG = { items: INSECTS2, facts: INSECTS2_FACTS, topicWord: "INSECT", topicPlural: "INSECTS", dir: "insects2", ext: "jpg", fit: "cover", voPrefix: "i2-", nameField: "name", introVo: "vo-intro-insects2", coldSlug: "rose-chafer" };
const E86CFG = { items: EMOJI_COUNTRIES2, facts: EMOJI_COUNTRIES2_FACTS, topicWord: "COUNTRY", topicPlural: "COUNTRIES", isEmoji: true, nameField: "title", slugKey: "id", voKey: "id", voPrefix: "ce-", introVo: "vo-intro-emojicountries2", coldSlug: "", theme: 1 };
const E39CFG = { items: AIRLINELOGOS, facts: AIRLINELOGO_FACTS, topicWord: "AIRLINE", topicPlural: "AIRLINES", dir: "airlines", ext: "png", fit: "contain", voPrefix: "al-", nameField: "name", introVo: "vo-intro-airline", coldSlug: "emirates" };
const E69CFG = { items: FASTFOOD, facts: FASTFOOD_FACTS, topicWord: "FAST-FOOD BRAND", topicPlural: "FAST-FOOD BRANDS", dir: "fastfood", ext: "png", fit: "contain", voPrefix: "ff-", nameField: "name", introVo: "vo-intro-fastfood", coldSlug: "mcdonalds" };
const E40CFG = { items: CLUBBADGES, facts: CLUBBADGE_FACTS, topicWord: "FOOTBALL CLUB", topicPlural: "CLUBS", dir: "clubs", ext: "png", fit: "contain", voPrefix: "fc-", nameField: "name", introVo: "vo-intro-club", coldSlug: "real-madrid" };
const E34CFG = { items: CATS, facts: CAT_FACTS, topicWord: "CAT BREED", topicPlural: "CAT BREEDS", dir: "cats", ext: "jpg", fit: "cover", voPrefix: "cat-", nameField: "name", introVo: "vo-intro-cat", coldSlug: "persian" };
const E01CFG = { items: LOGOS, facts: LOGO_FACTS, topicWord: "LOGO", topicPlural: "LOGOS", dir: "logos", ext: "svg", fit: "contain", voPrefix: "nm-", nameField: "name", introVo: "vo-intro-logo", coldSlug: "jenkins" };
const E02CFG = { items: FLAGS, facts: FLAG_FACTS, topicWord: "FLAG", topicPlural: "FLAGS", dir: "flags", ext: "svg", fit: "contain", voPrefix: "fl-", nameField: "name", slugKey: "iso", voKey: "iso", introVo: "vo-intro-flag", coldSlug: "" };
const E06CFG = { items: FLAGS2, facts: FLAG2_FACTS, topicWord: "FLAG", topicPlural: "FLAGS", dir: "flags", ext: "svg", fit: "contain", voPrefix: "fl-", nameField: "name", slugKey: "iso", voKey: "iso", introVo: "vo-intro-flag", coldSlug: "" };
// E73 «Guess the ZOOMED Flag» — hard-mode: EXTREME-ZOOM crop during the question, full flag at reveal. Reuses E02 flag images + FLAG_FACTS.
const E73CFG = { items: FLAGZOOM, facts: FLAG_FACTS, topicWord: "ZOOMED FLAG", topicPlural: "ZOOMED FLAGS", dir: "flags", ext: "svg", fit: "contain", voPrefix: "fz-", nameField: "name", introVo: "vo-intro-flagzoom", coldSlug: "", zoom: { scale: 3.0 } };
const E03CFG = { items: ANIMALS, facts: ANIMAL_FACTS, topicWord: "ANIMAL", topicPlural: "ANIMALS", dir: "animals", ext: "png", fit: "cover", voPrefix: "an-", nameField: "name", introVo: "vo-intro-animal", coldSlug: "" };
// E75 «Guess the ZOOMED Animal» — hard-mode: EXTREME-ZOOM crop during the question, full animal at reveal. Reuses E03 animal images + ANIMAL_FACTS + az- (copied an-) VOs.
const E75CFG = { items: ANIMALZOOM, facts: ANIMAL_FACTS, topicWord: "ZOOMED ANIMAL", topicPlural: "ANIMALS", dir: "animals", ext: "png", fit: "cover", voPrefix: "az-", nameField: "name", introVo: "vo-intro-animalzoom", coldSlug: "zebra", zoom: { scale: 3.0 } };
// E79 «Guess the ZOOMED Landmark» — hard-mode: EXTREME-ZOOM crop during the question, full landmark at reveal. Reuses E16 landmark images + LANDMARK_FACTS (keyed by slug) + lz- answer VOs.
const E79CFG = { items: LANDMARKZOOM, facts: LANDMARK_FACTS, topicWord: "ZOOMED LANDMARK", topicPlural: "LANDMARKS", dir: "landmarks", ext: "png", fit: "cover", voPrefix: "lz-", nameField: "name", introVo: "vo-intro-landmarkzoom", coldSlug: "fr", zoom: { scale: 3.0 } };
// E83 «Guess the ZOOMED Food» — hard-mode: EXTREME-ZOOM crop during the question, full dish at reveal. Reuses E14 food images + FOOD_FACTS (keyed by slug) + fz2- answer VOs (copies of E14 fd-).
const E83CFG = { items: FOODZOOM, facts: FOOD_FACTS, topicWord: "ZOOMED FOOD", topicPlural: "FOODS", dir: "foods", ext: "png", fit: "cover", voPrefix: "fz2-", nameField: "name", introVo: "vo-intro-foodzoom", coldSlug: "pizza", zoom: { scale: 3.0 } };
const E05CFG = { items: LOGOS2, facts: LOGO_FACTS, topicWord: "LOGO", topicPlural: "LOGOS", dir: "logos", ext: "svg", fit: "contain", voPrefix: "nm-", nameField: "name", introVo: "vo-intro-logo", coldSlug: "kubernetes" };
const E08CFG = { items: LOGOS3, facts: LOGO_FACTS, topicWord: "LOGO", topicPlural: "LOGOS", dir: "logos", ext: "svg", fit: "contain", voPrefix: "nm-", nameField: "name", introVo: "vo-intro-logo", coldSlug: "archlinux" };
const E14CFG = { items: FOODS, facts: FOOD_FACTS, topicWord: "FOOD", topicPlural: "FOODS", dir: "foods", ext: "png", fit: "cover", voPrefix: "fd-", nameField: "name", introVo: "vo-intro-food", coldSlug: "" };
const E74CFG = { items: FOODS2, facts: FOODS2_FACTS, topicWord: "DISH", topicPlural: "DISHES", dir: "foods2", ext: "jpg", fit: "cover", voPrefix: "f2-", nameField: "name", introVo: "vo-intro-foods2", coldSlug: "friedrice" };
const E04CFG = { items: CLUBS, facts: CLUB_FACTS, topicWord: "CLUB", topicPlural: "CLUBS", dir: "clubs", ext: "png", fit: "contain", voPrefix: "cb-", nameField: "name", introVo: "vo-intro-club", coldSlug: "ldu-quito" };
const E17CFG = { items: CARS, facts: CAR_FACTS, topicWord: "CAR", topicPlural: "CARS", dir: "cars", ext: "png", fit: "cover", voPrefix: "cm-", nameField: "name", introVo: "vo-intro-car", coldSlug: "auburn-speedster" };
const E78CFG = { items: CARS2, facts: CARS2_FACTS, topicWord: "CAR", topicPlural: "CARS", dir: "cars2", ext: "jpg", fit: "cover", voPrefix: "c2-", nameField: "name", introVo: "vo-intro-cars2", coldSlug: "ferrari-488" };
// E97 «Guess the ZOOMED Car» — hard-mode: EXTREME-ZOOM crop during the question, full car at reveal. Reuses E17 car images + CAR_FACTS + cz- (copied cm-) answer VOs.
const E97CFG = { items: CARZOOM, facts: CAR_FACTS, topicWord: "ZOOMED CAR", topicPlural: "CARS", dir: "cars", ext: "png", fit: "cover", voPrefix: "cz-", nameField: "name", introVo: "vo-intro-carzoom", coldSlug: "jeep-wrangler", zoom: { scale: 3.0 }, theme: 2 };
const E98CFG = { items: BIRDZOOM, facts: BIRD_FACTS, topicWord: "ZOOMED BIRD", topicPlural: "BIRDS", dir: "birds", ext: "jpg", fit: "cover", voPrefix: "bz-", nameField: "name", introVo: "vo-intro-birdzoom", coldSlug: "spangled-cotinga", zoom: { scale: 3.0 }, theme: 2 };
const E99CFG = { items: GEMZOOM, facts: GEM_FACTS, topicWord: "ZOOMED GEMSTONE", topicPlural: "GEMSTONES", dir: "gems", ext: "jpg", fit: "cover", voPrefix: "gz-", nameField: "name", introVo: "vo-intro-gemzoom", coldSlug: "diamond", zoom: { scale: 3.0 }, theme: 2 };
const E101CFG = { items: FISHZOOM, facts: FISH_FACTS, topicWord: "ZOOMED FISH", topicPlural: "FISH", dir: "fish", ext: "jpg", fit: "cover", voPrefix: "fz3-", nameField: "name", introVo: "vo-intro-fishzoom", coldSlug: "clownfish", zoom: { scale: 3.0 }, theme: 2 };
const E103CFG = { items: FLOWERZOOM, facts: FLOWER_FACTS, topicWord: "ZOOMED FLOWER", topicPlural: "FLOWERS", dir: "flowers", ext: "jpg", fit: "cover", voPrefix: "flz-", nameField: "name", introVo: "vo-intro-flowerzoom", coldSlug: "common-poppy", zoom: { scale: 3.0 }, theme: 2 };
const E104CFG = { items: INSECTZOOM, facts: INSECT_FACTS, topicWord: "ZOOMED INSECT", topicPlural: "INSECTS", dir: "insects", ext: "jpg", fit: "cover", voPrefix: "inz-", nameField: "name", introVo: "vo-intro-insectzoom", coldSlug: "ladybug", zoom: { scale: 3.0 }, theme: 2 };
const E105CFG = { items: BUTTERFLYZOOM, facts: BUTTERFLY_FACTS, topicWord: "ZOOMED BUTTERFLY", topicPlural: "BUTTERFLIES", dir: "butterflies", ext: "jpg", fit: "cover", voPrefix: "btz-", nameField: "name", introVo: "vo-intro-butterflyzoom", coldSlug: "blue-morpho", zoom: { scale: 3.0 }, theme: 2 };
const E110CFG = { items: SPIDERZOOM, facts: SPIDER_FACTS, topicWord: "ZOOMED SPIDER", topicPlural: "SPIDERS", dir: "spiders", ext: "jpg", fit: "cover", voPrefix: "sdz-", nameField: "name", introVo: "vo-intro-spiderzoom", coldSlug: "peacockspider", zoom: { scale: 3.0 }, theme: 3 };
const E112CFG = { items: AMPHIBIANZOOM, facts: AMPHIBIAN_FACTS, topicWord: "ZOOMED AMPHIBIAN", topicPlural: "AMPHIBIANS", dir: "amphibians", ext: "jpg", fit: "cover", voPrefix: "amz-", nameField: "name", introVo: "vo-intro-amphibianzoom", coldSlug: "firesalamander", zoom: { scale: 3.0 }, theme: 3 };
const E96CFG = { items: NATTEAMS, facts: NATTEAMS_FACTS, topicWord: "TEAM", topicPlural: "TEAMS", dir: "natteams", ext: "svg", fit: "contain", voPrefix: "nt-", nameField: "name", introVo: "vo-intro-natteam", coldSlug: "brazil", theme: 2 };
const E113CFG = { items: COAT_OF_ARMS, facts: COAT_OF_ARMS_FACTS, topicWord: "COUNTRY", topicPlural: "COUNTRIES", dir: "coatofarms", ext: "svg", fit: "contain", voPrefix: "coa-", nameField: "name", introVo: "vo-intro-coatofarms", coldSlug: "mexico", theme: 3 };
const E15CFG = { items: DOGS, facts: DOG_FACTS, topicWord: "DOG BREED", topicPlural: "DOG BREEDS", dir: "dogs", ext: "jpg", fit: "cover", voPrefix: "dog-", nameField: "name", introVo: "vo-intro-dog", coldSlug: "labrador" };
const E81CFG = { items: DOGS2, facts: DOGS2_FACTS, topicWord: "DOG BREED", topicPlural: "DOG BREEDS", dir: "dogs2", ext: "jpg", fit: "cover", voPrefix: "d2-", nameField: "name", introVo: "vo-intro-dogs2", coldSlug: "frenchbulldog" };
const E19CFG = { items: BIRDS, facts: BIRD_FACTS, topicWord: "BIRD", topicPlural: "BIRDS", dir: "birds", ext: "jpg", fit: "cover", voPrefix: "bd-", nameField: "name", introVo: "vo-intro-bird", coldSlug: "spangled-cotinga" };
const E20CFG = { items: SEA, facts: SEA_FACTS, topicWord: "SEA CREATURE", topicPlural: "SEA ANIMALS", dir: "sea", ext: "jpg", fit: "cover", voPrefix: "sc-", nameField: "name", introVo: "vo-intro-sea", coldSlug: "cleaner-wrasse" };
const E87CFG = { items: SEA2, facts: SEA2_FACTS, topicWord: "SEA CREATURE", topicPlural: "SEA CREATURES", dir: "sea2", ext: "jpg", fit: "cover", voPrefix: "se2-", nameField: "name", introVo: "vo-intro-sea2", coldSlug: "blue-whale", theme: 1 };
const E88CFG = { items: BUTTERFLIES2, facts: BUTTERFLIES2_FACTS, topicWord: "BUTTERFLY", topicPlural: "BUTTERFLIES", dir: "butterflies2", ext: "jpg", fit: "cover", voPrefix: "bf2-", nameField: "name", introVo: "vo-intro-butterflies2", coldSlug: "black-swallowtail", theme: 1 };
const E89CFG = { items: LOGOS7, facts: LOGOS7_FACTS, topicWord: "LOGO", topicPlural: "LOGOS", dir: "logos", ext: "svg", fit: "contain", voPrefix: "nm-", nameField: "name", introVo: "vo-intro-logo", coldSlug: "nasa", theme: 1 };
const E91CFG = { items: COUNTRYMAP, facts: COUNTRYMAP_FACTS, dir: "countrymap", ext: "svg", fit: "contain", voPrefix: "wm-", nameField: "name", topicWord: "COUNTRY", topicPlural: "COUNTRIES", introVo: "vo-intro-countrymap", coldSlug: "usa", theme: 1 };
const E80CFG = { items: BIRDS2, facts: BIRDS2_FACTS, topicWord: "BIRD", topicPlural: "BIRDS", dir: "birds2", ext: "jpg", fit: "cover", voPrefix: "b2-", nameField: "name", introVo: "vo-intro-birds2", coldSlug: "king-penguin" };
const E21CFG = { items: FRUITS, facts: FRUIT_FACTS, topicWord: "FRUIT OR VEG", topicPlural: "FRUITS & VEG", dir: "fruits", ext: "jpg", fit: "cover", voPrefix: "fr-", nameField: "name", introVo: "vo-intro-fruit", coldSlug: "ugli-fruit" };
const E09CFG = { items: FLOWERS, facts: FLOWER_FACTS, topicWord: "FLOWER", topicPlural: "FLOWERS", dir: "flowers", ext: "jpg", fit: "cover", voPrefix: "fl-", nameField: "name", introVo: "vo-intro-flower", coldSlug: "" };
const E82CFG = { items: FLOWERS2, facts: FLOWERS2_FACTS, topicWord: "FLOWER", topicPlural: "FLOWERS", dir: "flowers2", ext: "jpg", fit: "cover", voPrefix: "w2-", nameField: "name", introVo: "vo-intro-flowers2", coldSlug: "dahlia" };
import { Word3D } from "./Quiz/Word3D";
import { FruitsV2Quiz, FRUITSV2_FRAMES } from "./Quiz/fruitsv2";
import { FLOWERS } from "./Quiz/flowersData";
import { FLOWERS2 } from "./Quiz/flowers2Data";
import { FLOWERS2_FACTS } from "./Quiz/flowers2Facts";
import { DINOS } from "./Quiz/dinosData";
import { DINO_FACTS } from "./Quiz/dinoFacts";
import { ShortV2Quiz, SHORTV2_FRAMES } from "./Quiz/shortv2";
import { ButterfliesV2Quiz, BUTTERFLIESV2_FRAMES } from "./Quiz/butterfliesv2";
import { BUTTERFLIES } from "./Quiz/butterfliesData";
import { BUTTERFLY_FACTS } from "./Quiz/butterflyFacts";
import { BUTTERFLIES2, BUTTERFLIES2_LEVELS } from "./Quiz/butterflies2Data";
import { BUTTERFLIES2_FACTS } from "./Quiz/butterflies2Facts";
import { ANIMALS2 } from "./Quiz/animals2Data";
import { ANIMALS2_FACTS } from "./Quiz/animals2Facts";
import { ANIMALS3 } from "./Quiz/animals3Data";
import { ANIMALS3_FACTS } from "./Quiz/animals3Facts";
import { LANDMARKS2 } from "./Quiz/landmarks2Data";
import { LANDMARKS2_FACTS } from "./Quiz/landmarks2Facts";
import { REPTILES } from "./Quiz/reptilesData";
import { REPTILE_FACTS } from "./Quiz/reptileFacts";
import { REPTILES2 } from "./Quiz/reptiles2Data";
import { REPTILES2_FACTS } from "./Quiz/reptiles2Facts";
import { SILHOUETTES } from "./Quiz/silhouetteData";
import { SILHOUETTE_FACTS } from "./Quiz/silhouetteFacts";
import { DINO_SILHOUETTES } from "./Quiz/dinosilhouetteData";
import { DINO_SILHOUETTES_FACTS } from "./Quiz/dinosilhouetteFacts";
import { SCRAMBLED } from "./Quiz/scrambledData";
import { SCRAMBLED_FACTS } from "./Quiz/scrambledFacts";
import { NO_VOWELS } from "./Quiz/novowelsData";
import { NO_VOWELS_FACTS } from "./Quiz/novowelsFacts";
import { US_STATES } from "./Quiz/usstatesData";
import { US_STATES_FACTS } from "./Quiz/usstatesFacts";
import { REVERSED } from "./Quiz/reversedData";
import { REVERSED_FACTS } from "./Quiz/reversedFacts";
import { CAPITAL_SCRAMBLED } from "./Quiz/capitalscrambledData";
import { CAPITAL_SCRAMBLED_FACTS } from "./Quiz/capitalscrambledFacts";
import { USSTATE_SCRAMBLED } from "./Quiz/usstatescrambledData";
import { USSTATE_SCRAMBLED_FACTS } from "./Quiz/usstatescrambledFacts";
import { MISSING_LETTERS } from "./Quiz/missinglettersData";
import { MISSING_LETTERS_FACTS } from "./Quiz/missinglettersFacts";
import { BIRDZOOM } from "./Quiz/birdzoomData";
import { GEMZOOM } from "./Quiz/gemzoomData";
import { REPTILEZOOM } from "./Quiz/reptilezoomData";
import { ROCKS } from "./Quiz/rocksData";
import { ROCK_FACTS } from "./Quiz/rockFacts";
import { HATS } from "./Quiz/hatsData";
import { HAT_FACTS } from "./Quiz/hatFacts";
import { SPIDERS } from "./Quiz/spidersData";
import { SPIDER_FACTS } from "./Quiz/spiderFacts";
import { AMPHIBIANS } from "./Quiz/amphibiansData";
import { AMPHIBIAN_FACTS } from "./Quiz/amphibianFacts";
import { SnakesV2Quiz, SNAKESV2_FRAMES } from "./Quiz/snakesv2";
import { SNAKES } from "./Quiz/snakesData";
import { ShortQuiz, SHORT_FRAMES } from "./Quiz/short";
import { LOGOS } from "./Quiz/logosData";
import { LOGO_FACTS } from "./Quiz/logoFacts";
import { FLAGS } from "./Quiz/flagsData";
import { FLAG_FACTS } from "./Quiz/flagFacts";
import { FLAGZOOM } from "./Quiz/flagzoomData";
import { ANIMALZOOM } from "./Quiz/animalzoomData";
import { CARZOOM } from "./Quiz/carzoomData";
import { FISHZOOM } from "./Quiz/fishzoomData";
import { FLOWERZOOM } from "./Quiz/flowerzoomData";
import { INSECTZOOM } from "./Quiz/insectzoomData";
import { BUTTERFLYZOOM } from "./Quiz/butterflyzoomData";
import { SPIDERZOOM } from "./Quiz/spiderzoomData";
import { AMPHIBIANZOOM } from "./Quiz/amphibianzoomData";
import { LANDMARKZOOM } from "./Quiz/landmarkzoomData";
import { FOODZOOM } from "./Quiz/foodzoomData";
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
import { LOGOS5 } from "./Quiz/logos5Data";
import { LOGOS5_FACTS } from "./Quiz/logos5Facts";
import { LOGOS6 } from "./Quiz/logos6Data";
import { LOGOS6_FACTS } from "./Quiz/logos6Facts";
import { LOGOS7 } from "./Quiz/logos7Data";
import { LOGOS7_FACTS } from "./Quiz/logos7Facts";
import { NATTEAMS } from "./Quiz/natteamsData";
import { NATTEAMS_FACTS } from "./Quiz/natteamsFacts";
import { COAT_OF_ARMS } from "./Quiz/coatofarmsData";
import { COAT_OF_ARMS_FACTS } from "./Quiz/coatofarmsFacts";
import { FLAGS_MEGA } from "./Quiz/flagsMegaData";
import { FLAGS_MEGA_FACTS } from "./Quiz/flagsMegaFacts";
import { LOGOS_MEGA } from "./Quiz/logosMegaData";
import { LOGOS_MEGA_FACTS } from "./Quiz/logosMegaFacts";
import { COUNTRYMAP } from "./Quiz/countrymapData";
import { COUNTRYMAP_FACTS } from "./Quiz/countrymapFacts";
import { EMOJI_GAMES } from "./Quiz/emojiGamesData";
import { EMOJI_GAME_FACTS } from "./Quiz/emojiGameFacts";
import { EMOJI_COUNTRIES } from "./Quiz/emojiCountriesData";
import { EMOJI_COUNTRY_FACTS } from "./Quiz/emojiCountryFacts";
import { GAMINGLOGOS } from "./Quiz/gamingLogosData";
import { GAMINGLOGO_FACTS } from "./Quiz/gamingLogoFacts";
import { EMOJI_TV } from "./Quiz/emojiTvData";
import { EMOJI_TV_FACTS } from "./Quiz/emojiTvFacts";
import { EMOJI_BRANDS } from "./Quiz/emojiBrandsData";
import { EMOJI_BRAND_FACTS } from "./Quiz/emojiBrandFacts";
import { EMOJI_BOOKS } from "./Quiz/emojiBooksData";
import { EMOJI_BOOK_FACTS } from "./Quiz/emojiBookFacts";
import { FISH } from "./Quiz/fishData";
import { FISH_FACTS } from "./Quiz/fishFacts";
import { FISH2 } from "./Quiz/fish2Data";
import { FISH2_FACTS } from "./Quiz/fish2Facts";
import { COCKTAILS } from "./Quiz/cocktailsData";
import { COCKTAIL_FACTS } from "./Quiz/cocktailFacts";
import { DRINKS } from "./Quiz/drinksData";
import { DRINK_FACTS } from "./Quiz/drinkFacts";
import { BREADS } from "./Quiz/breadsData";
import { BREAD_FACTS } from "./Quiz/breadFacts";
import { NUTS } from "./Quiz/nutsData";
import { NUT_FACTS } from "./Quiz/nutFacts";
import { CACTI } from "./Quiz/cactiData";
import { CACTUS_FACTS } from "./Quiz/cactusFacts";
import { DESSERTS } from "./Quiz/dessertsData";
import { DESSERT_FACTS } from "./Quiz/dessertFacts";
import { KITCHEN } from "./Quiz/kitchenData";
import { KITCHEN_FACTS } from "./Quiz/kitchenFacts";
import { SPICES } from "./Quiz/spicesData";
import { SPICE_FACTS } from "./Quiz/spiceFacts";
import { PASTA } from "./Quiz/pastaData";
import { PASTA_FACTS } from "./Quiz/pastaFacts";
import { CHEESES } from "./Quiz/cheesesData";
import { CHEESE_FACTS } from "./Quiz/cheeseFacts";
import { TRAINS } from "./Quiz/trainsData";
import { TRAIN_FACTS } from "./Quiz/trainFacts";
import { PRIMATES } from "./Quiz/primatesData";
import { PRIMATE_FACTS } from "./Quiz/primateFacts";
import { BOATS } from "./Quiz/boatsData";
import { BOAT_FACTS } from "./Quiz/boatFacts";
import { SHELLS } from "./Quiz/shellsData";
import { SHELL_FACTS } from "./Quiz/shellFacts";
import { MUSHROOMS } from "./Quiz/mushroomsData";
import { MUSHROOM_FACTS } from "./Quiz/mushroomFacts";
import { MUSHROOMS2 } from "./Quiz/mushrooms2Data";
import { MUSHROOMS2_FACTS } from "./Quiz/mushrooms2Facts";
import { AIRCRAFT } from "./Quiz/aircraftData";
import { AIRCRAFT_FACTS } from "./Quiz/aircraftFacts";
import { SPACE } from "./Quiz/spaceData";
import { SPACE_FACTS } from "./Quiz/spaceFacts";
import { SPORTS } from "./Quiz/sportsData";
import { SPORT_FACTS } from "./Quiz/sportFacts";
import { TREES } from "./Quiz/treesData";
import { TREE_FACTS } from "./Quiz/treeFacts";
import { TOOLS } from "./Quiz/toolsData";
import { TOOL_FACTS } from "./Quiz/toolFacts";
import { HORSES } from "./Quiz/horsesData";
import { HORSE_FACTS } from "./Quiz/horseFacts";
import { GEMS } from "./Quiz/gemsData";
import { GEM_FACTS } from "./Quiz/gemFacts";
import { INSTRUMENTS } from "./Quiz/instrumentsData";
import { INSTRUMENT_FACTS } from "./Quiz/instrumentFacts";
import { INSECTS } from "./Quiz/insectsData";
import { INSECT_FACTS } from "./Quiz/insectFacts";
import { INSECTS2 } from "./Quiz/insects2Data";
import { INSECTS2_FACTS } from "./Quiz/insects2Facts";
import { EMOJI_COUNTRIES2 } from "./Quiz/emojiCountries2Data";
import { EMOJI_COUNTRIES2_FACTS } from "./Quiz/emojiCountries2Facts";
import { AIRLINELOGOS } from "./Quiz/airlineLogosData";
import { AIRLINELOGO_FACTS } from "./Quiz/airlineLogoFacts";
import { FASTFOOD } from "./Quiz/fastfoodData";
import { FASTFOOD_FACTS } from "./Quiz/fastfoodFacts";
import { CATS } from "./Quiz/catsData";
import { CAT_FACTS } from "./Quiz/catFacts";
import { EMOJI_WORD } from "./Quiz/emojiwordData";
import { EMOJI_WORD_FACTS } from "./Quiz/emojiwordFacts";
import { BRAND_SLOGAN } from "./Quiz/brandSloganData";
import { BRAND_SLOGAN_FACTS } from "./Quiz/brandSloganFacts";
import { EMOJI_SONGS_2 } from "./Quiz/songEmoji2Data";
import { EMOJI_SONG_FACTS_2 } from "./Quiz/songEmoji2Facts";
import { MOVIE_EMOJI_2 } from "./Quiz/movieEmoji2Data";
import { MOVIE_EMOJI_2_FACTS } from "./Quiz/movieEmoji2Facts";
import { GAME_EMOJI_2 } from "./Quiz/gameEmoji2Data";
import { GAME_EMOJI_2_FACTS } from "./Quiz/gameEmoji2Facts";
import { TV_EMOJI_2 } from "./Quiz/tvEmoji2Data";
import { TV_EMOJI_2_FACTS } from "./Quiz/tvEmoji2Facts";
import { BOOK_EMOJI_2 } from "./Quiz/bookEmoji2Data";
import { BOOK_EMOJI_2_FACTS } from "./Quiz/bookEmoji2Facts";
import { BRAND_EMOJI_2 } from "./Quiz/brandEmoji2Data";
import { BRAND_EMOJI_2_FACTS } from "./Quiz/brandEmoji2Facts";
import { FOOD_EMOJI_2 } from "./Quiz/foodEmoji2Data";
import { FOOD_EMOJI_2_FACTS } from "./Quiz/foodEmoji2Facts";
import { HERO_EMOJI } from "./Quiz/heroEmojiData";
import { HERO_EMOJI_FACTS } from "./Quiz/heroEmojiFacts";
import { DISNEY_EMOJI } from "./Quiz/disneyEmojiData";
import { DISNEY_EMOJI_FACTS } from "./Quiz/disneyEmojiFacts";
import { ANIME_EMOJI } from "./Quiz/animeEmojiData";
import { ANIME_EMOJI_FACTS } from "./Quiz/animeEmojiFacts";
import { ANIMAL_EMOJI } from "./Quiz/animalEmojiData";
import { ANIMAL_EMOJI_FACTS } from "./Quiz/animalEmojiFacts";
import { SPORTS_EMOJI } from "./Quiz/sportsEmojiData";
import { SPORTS_EMOJI_FACTS } from "./Quiz/sportsEmojiFacts";
import { JOBS_EMOJI } from "./Quiz/jobsEmojiData";
import { JOBS_EMOJI_FACTS } from "./Quiz/jobsEmojiFacts";
import { CARTOON_EMOJI } from "./Quiz/cartoonEmojiData";
import { CARTOON_EMOJI_FACTS } from "./Quiz/cartoonEmojiFacts";
import { FAIRYTALE_EMOJI } from "./Quiz/fairytaleEmojiData";
import { FAIRYTALE_EMOJI_FACTS } from "./Quiz/fairytaleEmojiFacts";
import { BAND_EMOJI } from "./Quiz/bandEmojiData";
import { BAND_EMOJI_FACTS } from "./Quiz/bandEmojiFacts";
import { FRUIT_EMOJI } from "./Quiz/fruitEmojiData";
import { FRUIT_EMOJI_FACTS } from "./Quiz/fruitEmojiFacts";
import { BOARDGAME_EMOJI } from "./Quiz/boardgameEmojiData";
import { BOARDGAME_EMOJI_FACTS } from "./Quiz/boardgameEmojiFacts";
import { VEHICLE_EMOJI } from "./Quiz/vehicleEmojiData";
import { VEHICLE_EMOJI_FACTS } from "./Quiz/vehicleEmojiFacts";
import { HOLIDAY_EMOJI } from "./Quiz/holidayEmojiData";
import { HOLIDAY_EMOJI_FACTS } from "./Quiz/holidayEmojiFacts";
import { MYTHCREATURE_EMOJI } from "./Quiz/mythcreatureEmojiData";
import { MYTHCREATURE_EMOJI_FACTS } from "./Quiz/mythcreatureEmojiFacts";
import { WEATHER_EMOJI } from "./Quiz/weatherEmojiData";
import { WEATHER_EMOJI_FACTS } from "./Quiz/weatherEmojiFacts";
import { MYTHGOD_EMOJI } from "./Quiz/mythgodEmojiData";
import { MYTHGOD_EMOJI_FACTS } from "./Quiz/mythgodEmojiFacts";
import { HOBBY_EMOJI } from "./Quiz/hobbyEmojiData";
import { HOBBY_EMOJI_FACTS } from "./Quiz/hobbyEmojiFacts";
import { CITY_EMOJI } from "./Quiz/cityEmojiData";
import { CITY_EMOJI_FACTS } from "./Quiz/cityEmojiFacts";
import { DANCE_EMOJI } from "./Quiz/danceEmojiData";
import { DANCE_EMOJI_FACTS } from "./Quiz/danceEmojiFacts";
import { SEACREATURE_EMOJI } from "./Quiz/seacreatureEmojiData";
import { SEACREATURE_EMOJI_FACTS } from "./Quiz/seacreatureEmojiFacts";
import { CLOTHING_EMOJI } from "./Quiz/clothingEmojiData";
import { CLOTHING_EMOJI_FACTS } from "./Quiz/clothingEmojiFacts";
import { DRINK_EMOJI } from "./Quiz/drinkEmojiData";
import { DRINK_EMOJI_FACTS } from "./Quiz/drinkEmojiFacts";
import { GAMECHAR_EMOJI } from "./Quiz/gamecharEmojiData";
import { GAMECHAR_EMOJI_FACTS } from "./Quiz/gamecharEmojiFacts";
import { VILLAIN_EMOJI } from "./Quiz/villainEmojiData";
import { VILLAIN_EMOJI_FACTS } from "./Quiz/villainEmojiFacts";
import { TOY_EMOJI } from "./Quiz/toyEmojiData";
import { TOY_EMOJI_FACTS } from "./Quiz/toyEmojiFacts";
import { ANIMECHAR_EMOJI } from "./Quiz/animecharEmojiData";
import { ANIMECHAR_EMOJI_FACTS } from "./Quiz/animecharEmojiFacts";
import { RHYME_EMOJI } from "./Quiz/rhymeEmojiData";
import { RHYME_EMOJI_FACTS } from "./Quiz/rhymeEmojiFacts";
import { DESSERT_EMOJI } from "./Quiz/dessertEmojiData";
import { DESSERT_EMOJI_FACTS } from "./Quiz/dessertEmojiFacts";
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
      <Composition id="ThumbEmojiGame" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F3AE", "1F47E", "?", "1F344", "?", "1F3C1", "?", "1F47B", "1F0CF"], line1: "CAN YOU NAME ALL", word: "EMOJI?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbDino" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "dinos", grid: ["tyrannosaurus-rex", "triceratops", "?", "stegosaurus", "?", "velociraptor", "?", "brachiosaurus", "spinosaurus"], line1: "CAN YOU NAME ALL", word: "DINO?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbEmojiCountry" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F5FC", "1F5FD", "?", "1F428", "?", "1F418", "?", "1F3EF", "1F42A"], line1: "CAN YOU NAME ALL", word: "EMOJI?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbGaming" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "gaming", grid: ["minecraft", "xbox", "?", "playstation", "?", "nintendo", "?", "pokemon", "fortnite"], line1: "CAN YOU NAME ALL", word: "GAME?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbFish" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "fish", grid: ["clownfish", "great-white-shark", "?", "pufferfish", "?", "seahorse", "?", "swordfish", "piranha"], line1: "CAN YOU NAME ALL", word: "FISH", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="Thumb84" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "fish2", grid: ["tiger-shark", "rainbow-trout", "?", "yellow-tang", "?", "emperor-angelfish", "?", "mako-shark", "flounder"], line1: "CAN YOU NAME ALL", word: "FISH", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbNuts" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "nuts", grid: ["almond", "peanut", "?", "walnut", "?", "cashew", "?", "pistachio", "coconut"], line1: "CAN YOU NAME ALL", word: "NUT", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbKitchen" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "kitchen", grid: ["whisk", "spatula", "?", "ladle", "?", "grater", "?", "rollingpin", "tongs"], line1: "CAN YOU NAME ALL", word: "KITCHEN UTENSIL", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbSpices" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "spices", grid: ["basil", "cinnamon", "?", "blackpepper", "?", "ginger", "?", "rosemary", "oregano"], line1: "CAN YOU NAME ALL", word: "HERBS & SPICES", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbShells" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "shells", grid: ["scallop", "queenconch", "?", "nautilus", "?", "tigercowrie", "?", "sanddollar", "giantclam"], line1: "CAN YOU NAME ALL", word: "SEASHELL", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbMushrooms" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "mushrooms", grid: ["flyagaric", "chanterelle", "?", "portobello", "?", "porcini", "?", "morel", "oyster"], line1: "CAN YOU NAME ALL", word: "MUSHROOM", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbAircraft" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "aircraft", grid: ["boeing747", "concorde", "?", "a380", "?", "spitfire", "?", "f16", "sr71"], line1: "CAN YOU NAME ALL", word: "AIRCRAFT", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbClubs" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "clubbadges", grid: ["real-madrid", "barcelona", "?", "manchester-united", "?", "liverpool", "?", "bayern-munich", "juventus"], line1: "CAN YOU NAME ALL", word: "FOOTBALL CLUB", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbDogs" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "dogs", grid: ["labrador", "germanshepherd", "?", "goldenretriever", "?", "husky", "?", "dalmatian", "beagle"], line1: "CAN YOU NAME ALL", word: "DOG BREED", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbInsect" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "insects", grid: ["ladybug", "honey-bee", "?", "dragonfly", "?", "praying-mantis", "?", "monarch-butterfly", "stag-beetle"], line1: "CAN YOU NAME ALL", word: "INSECT", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbAirline" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "airlines", grid: ["emirates", "lufthansa", "?", "qatarairways", "?", "delta", "?", "britishairways", "singaporeairlines"], line1: "CAN YOU NAME ALL", word: "AIRLINE", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbFastfood" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "fastfood", grid: ["mcdonalds", "kfc", "?", "burgerking", "?", "starbucks", "?", "subway", "pizzahut"], line1: "CAN YOU NAME ALL", word: "FAST FOOD", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbCats" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "cats", grid: ["persian", "siamese", "?", "mainecoon", "?", "bengal", "?", "sphynx", "ragdoll"], line1: "CAN YOU NAME ALL", word: "CAT BREED", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbEmojiTv" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F4FA", "1F9DF", "?", "1F991", "?", "1F409", "?", "1F437", "1F369"], line1: "CAN YOU NAME ALL", word: "EMOJI?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbEmojiBrand" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F35F", "1F964", "?", "1F45F", "?", "1F34E", "?", "1F47B", "1F4E6"], line1: "CAN YOU NAME ALL", word: "EMOJI?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbEmojiBook" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F9D9", "1F4D6", "?", "1F40B", "?", "1F9DB", "?", "1F407", "1F934"], line1: "CAN YOU NAME ALL", word: "EMOJI?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
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
      <Composition id="E73Quiz" component={QuizV2} durationInFrames={quizFrames(E73CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E73CFG }} />
      <Composition id="Thumb73" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "flags", grid: ["fr", "de", "?", "nl", "?", "ru", "?", "it", "us"], line1: "CAN YOU NAME ALL", word: "ZOOMED FLAG", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E75Quiz" component={QuizV2} durationInFrames={quizFrames(E75CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E75CFG }} />
      <Composition id="Thumb75" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "animals", grid: ["zebra", "tiger", "?", "giraffe", "?", "peacock", "?", "flamingo", "panda"], line1: "CAN YOU NAME ALL", word: "ZOOMED ANIMAL", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E79Quiz" component={QuizV2} durationInFrames={quizFrames(E79CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E79CFG }} />
      <Composition id="Thumb79" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "landmarks", grid: ["fr", "in-taj", "?", "it-colosseum", "?", "br", "?", "au", "ru"], line1: "CAN YOU NAME ALL", word: "ZOOMED LANDMARK", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E83Quiz" component={QuizV2} durationInFrames={quizFrames(E83CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E83CFG }} />
      <Composition id="Thumb83" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "foods", grid: ["pizza", "sushi", "?", "watermelon", "?", "steak", "?", "macaron", "donut"], line1: "CAN YOU NAME ALL", word: "ZOOMED FOOD", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E03Quiz" component={QuizV2} durationInFrames={quizFrames(E03CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E03CFG }} />
      <Composition id="E05Quiz" component={QuizV2} durationInFrames={quizFrames(E05CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E05CFG }} />
      <Composition id="E08Quiz" component={QuizV2} durationInFrames={quizFrames(E08CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E08CFG }} />
      <Composition id="E14Quiz" component={QuizV2} durationInFrames={quizFrames(E14CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E14CFG }} />
      <Composition id="E74Quiz" component={QuizV2} durationInFrames={quizFrames(E74CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E74CFG }} />
      <Composition id="E04Quiz" component={QuizV2} durationInFrames={quizFrames(E04CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E04CFG }} />
      <Composition id="E17Quiz" component={QuizV2} durationInFrames={quizFrames(E17CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E17CFG }} />
      <Composition id="E78Quiz" component={QuizV2} durationInFrames={quizFrames(E78CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E78CFG }} />
      <Composition id="E15Quiz" component={QuizV2} durationInFrames={quizFrames(E15CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E15CFG }} />
      <Composition id="E81Quiz" component={QuizV2} durationInFrames={quizFrames(E81CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E81CFG }} />
      <Composition id="Thumb81" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "dogs2", grid: ["frenchbulldog", "pitbull", "?", "bostonterrier", "?", "goldendoodle", "?", "collie", "giantschnauzer"], line1: "CAN YOU NAME ALL", word: "DOG BREED", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="Thumb82" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "flowers2", grid: ["dahlia", "jasmine", "?", "poinsettia", "?", "cyclamen", "?", "anthurium", "salvia"], line1: "CAN YOU NAME ALL", word: "FLOWER?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E19Quiz" component={QuizV2} durationInFrames={quizFrames(E19CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E19CFG }} />
      <Composition id="E80Quiz" component={QuizV2} durationInFrames={quizFrames(E80CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E80CFG }} />
      <Composition id="E20Quiz" component={QuizV2} durationInFrames={quizFrames(E20CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E20CFG }} />
      <Composition id="E87Quiz" component={QuizV2} durationInFrames={quizFrames(E87CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E87CFG }} />
      <Composition id="E88Quiz" component={QuizV2} durationInFrames={quizFrames(E88CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E88CFG }} />
      <Composition id="E89Quiz" component={QuizV2} durationInFrames={quizFrames(E89CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E89CFG }} />
      <Composition id="Thumb89" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "logos", grid: ["nasa", "dior", "?", "hermes", "?", "jordan", "?", "virgin", "kodak"], line1: "CAN YOU NAME ALL", word: "LOGO", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E91Quiz" component={QuizV2} durationInFrames={quizFrames(E91CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E91CFG }} />
      <Composition id="Thumb91" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "countrymap", grid: ["usa", "brazil", "?", "australia", "?", "egypt", "?", "russia", "japan"], line1: "CAN YOU NAME ALL", word: "COUNTRY", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E21Quiz" component={QuizV2} durationInFrames={quizFrames(E21CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E21CFG }} />
      <Composition id="E09Quiz" component={QuizV2} durationInFrames={quizFrames(E09CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E09CFG }} />
      <Composition id="E82Quiz" component={QuizV2} durationInFrames={quizFrames(E82CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E82CFG }} />
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
      <Composition id="E72Quiz" component={QuizV2} durationInFrames={quizFrames(E72CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E72CFG }} />
      <Composition id="Thumb72" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "logos", grid: ["cnn", "fox", "?", "tacobell", "?", "tinder", "?", "nbc", "uniqlo"], line1: "CAN YOU NAME ALL", word: "LOGO", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E77Quiz" component={QuizV2} durationInFrames={quizFrames(E77CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E77CFG }} />
      <Composition id="Thumb77" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "logos", grid: ["meta", "nba", "?", "ufc", "?", "wwe", "?", "premierleague", "googlegemini"], line1: "CAN YOU NAME ALL", word: "LOGO", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="Thumb78" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "cars2", grid: ["bugatti-veyron", "lamborghini-urus", "?", "tesla-model-3", "?", "ford-gt", "?", "ferrari-488", "mclaren-720s"], line1: "CAN YOU NAME ALL", word: "CAR", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="Thumb80" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "birds2", grid: ["king-penguin", "golden-eagle", "?", "black-swan", "?", "emu", "?", "peregrine-falcon", "osprey"], line1: "CAN YOU NAME ALL", word: "BIRD", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E31Quiz" component={QuizV2} durationInFrames={quizFrames(E31CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E31CFG }} />
      <Composition id="E13Quiz" component={QuizV2} durationInFrames={quizFrames(E13CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E13CFG }} />
      <Composition id="E32Quiz" component={QuizV2} durationInFrames={quizFrames(E32CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E32CFG }} />
      <Composition id="E29Quiz" component={QuizV2} durationInFrames={quizFrames(E29CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E29CFG }} />
      <Composition id="E36Quiz" component={QuizV2} durationInFrames={quizFrames(E36CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E36CFG }} />
      <Composition id="E84Quiz" component={QuizV2} durationInFrames={quizFrames(E84CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E84CFG }} />
      <Composition id="E64Quiz" component={QuizV2} durationInFrames={quizFrames(E64CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E64CFG }} />
      <Composition id="ThumbCocktails" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "cocktails", grid: ["margarita", "mojito", "?", "martini", "?", "cosmopolitan", "?", "negroni", "manhattan"], line1: "CAN YOU NAME ALL", word: "COCKTAIL", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E65Quiz" component={QuizV2} durationInFrames={quizFrames(E65CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E65CFG }} />
      <Composition id="ThumbBreads" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "breads", grid: ["baguette", "bagel", "?", "croissant", "?", "pretzel", "?", "naan", "pita"], line1: "CAN YOU NAME ALL", word: "BREAD", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="Thumb74" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "foods2", grid: ["friedrice", "kebab", "?", "shawarma", "?", "chickencurry", "?", "macandcheese", "chickenwings"], line1: "CAN YOU NAME ALL", word: "DISH", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E62Quiz" component={QuizV2} durationInFrames={quizFrames(E62CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E62CFG }} />
      <Composition id="E61Quiz" component={QuizV2} durationInFrames={quizFrames(E61CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E61CFG }} />
      <Composition id="E63Quiz" component={QuizV2} durationInFrames={quizFrames(E63CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E63CFG }} />
      <Composition id="ThumbCacti" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "cacti", grid: ["saguaro", "aloevera", "?", "barrelcactus", "?", "jadeplant", "?", "agave", "echeveria"], line1: "CAN YOU NAME ALL", word: "CACTUS", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbDesserts" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "desserts", grid: ["chocolatecake", "icecream", "?", "donut", "?", "cheesecake", "?", "macaron", "cupcake"], line1: "CAN YOU NAME ALL", word: "DESSERT", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E53Quiz" component={QuizV2} durationInFrames={quizFrames(E53CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E53CFG }} />
      <Composition id="E60Quiz" component={QuizV2} durationInFrames={quizFrames(E60CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E60CFG }} />
      <Composition id="E41Quiz" component={QuizV2} durationInFrames={quizFrames(E41CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E41CFG }} />
      <Composition id="E49Quiz" component={QuizV2} durationInFrames={quizFrames(E49CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E49CFG }} />
      <Composition id="ThumbPasta" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "pasta", grid: ["spaghetti", "penne", "?", "farfalle", "?", "fusilli", "?", "macaroni", "ravioli"], line1: "CAN YOU NAME ALL", word: "PASTA", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbCheese" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "cheese", grid: ["cheddar", "mozzarella", "?", "brie", "?", "gouda", "?", "parmesan", "feta"], line1: "CAN YOU NAME ALL", word: "CHEESE", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E58Quiz" component={QuizV2} durationInFrames={quizFrames(E58CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E58CFG }} />
      <Composition id="E59Quiz" component={QuizV2} durationInFrames={quizFrames(E59CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E59CFG }} />
      <Composition id="ThumbTrains" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "trains", grid: ["steamlocomotive", "bullettrain", "?", "subwaytrain", "?", "monorail", "?", "tram", "freighttrain"], line1: "CAN YOU NAME ALL", word: "TRAIN", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbPrimates" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "primates", grid: ["chimpanzee", "gorilla", "?", "orangutan", "?", "mandrill", "?", "baboon", "ringtailedlemur"], line1: "CAN YOU NAME ALL", word: "PRIMATE", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E55Quiz" component={QuizV2} durationInFrames={quizFrames(E55CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E55CFG }} />
      <Composition id="ThumbBoats" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "boats", grid: ["sailboat", "kayak", "?", "cruiseship", "?", "canoe", "?", "submarine", "gondola"], line1: "CAN YOU NAME ALL", word: "BOAT", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E52Quiz" component={QuizV2} durationInFrames={quizFrames(E52CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E52CFG }} />
      <Composition id="E50Quiz" component={QuizV2} durationInFrames={quizFrames(E50CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E50CFG }} />
      <Composition id="E54Quiz" component={QuizV2} durationInFrames={quizFrames(E54CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E54CFG }} />
      <Composition id="E51Quiz" component={QuizV2} durationInFrames={quizFrames(E51CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E51CFG }} />
      <Composition id="E47Quiz" component={QuizV2} durationInFrames={quizFrames(E47CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E47CFG }} />
      <Composition id="ThumbSpace" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "space", grid: ["saturn", "moon", "?", "mars", "?", "jupiter", "?", "milkyway", "sun"], line1: "CAN YOU NAME ALL", word: "SPACE OBJECT", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbSports" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "sports", grid: ["soccer", "basketball", "?", "tennis", "?", "boxing", "?", "golf", "swimming"], line1: "CAN YOU NAME ALL", word: "SPORT", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E46Quiz" component={QuizV2} durationInFrames={quizFrames(E46CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E46CFG }} />
      <Composition id="E48Quiz" component={QuizV2} durationInFrames={quizFrames(E48CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E48CFG }} />
      <Composition id="ThumbTrees" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "trees", grid: ["oak", "pine", "?", "maple", "?", "willow", "?", "baobab", "cherryblossom"], line1: "CAN YOU NAME ALL", word: "TREE", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbTools" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "tools", grid: ["hammer", "screwdriver", "?", "wrench", "?", "handsaw", "?", "drill", "axe"], line1: "CAN YOU NAME ALL", word: "TOOL", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E70Quiz" component={QuizV2} durationInFrames={quizFrames(E70CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E70CFG }} />
      <Composition id="E45Quiz" component={QuizV2} durationInFrames={quizFrames(E45CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E45CFG }} />
      <Composition id="E92Quiz" component={QuizV2} durationInFrames={quizFrames(E92CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E92CFG }} />
      <Composition id="Thumb92" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "reptiles2", grid: ["asianwatermonitor", "nilemonitor", "?", "chinesealligator", "?", "cubancrocodile", "?", "commonchameleon", "indianstartortoise"], line1: "CAN YOU NAME ALL", word: "REPTILE", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E100Quiz" component={QuizV2} durationInFrames={quizFrames(E100CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E100CFG }} />
      <Composition id="Thumb100" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "reptiles", grid: ["komododragon", "greeniguana", "?", "kingcobra", "?", "nilecrocodile", "?", "leopardgecko", "galapagostortoise"], line1: "CAN YOU NAME ALL", word: "ZOOMED REPTILE", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E90Quiz" component={QuizV2} durationInFrames={quizFrames(E90CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E90CFG }} />
      <Composition id="Thumb90" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "silhouette", grid: ["elephant", "giraffe", "kangaroo", "?", "zebra", "?", "cheetah", "?", "pangolin"], line1: "CAN YOU NAME ALL", word: "ANIMAL", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E93Quiz" component={QuizV2} durationInFrames={quizFrames(E93CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E93CFG }} />
      <Composition id="Thumb93" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "mushrooms2", grid: ["lobstermushroom", "splitgill", "?", "commoninkcap", "?", "dogstinkhorn", "?", "winterchanterelle", "blackmorel"], line1: "CAN YOU NAME ALL", word: "MUSHROOM", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E94Quiz" component={QuizV2} durationInFrames={quizFrames(E94CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E94CFG }} />
      <Composition id="Thumb94" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "flags", grid: ["us", "jp", "?", "br", "?", "fr", "?", "de", "in"], line1: "CAN YOU NAME ALL", word: "FLAG", number: "195", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E95Quiz" component={QuizV2} durationInFrames={quizFrames(E95CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E95CFG }} />
      <Composition id="Thumb95" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "logos", grid: ["google", "mcdonalds", "?", "adidas", "?", "instagram", "?", "android", "ferrari"], line1: "CAN YOU NAME ALL", word: "LOGO", number: "300", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E97Quiz" component={QuizV2} durationInFrames={quizFrames(E97CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E97CFG }} />
      <Composition id="Thumb97" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "cars", grid: ["vw-beetle", "jeep-wrangler", "?", "rolls-royce-phantom", "?", "porsche-911", "?", "lamborghini-aventador", "ford-mustang"], line1: "CAN YOU NAME ALL", word: "ZOOMED CAR", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E98Quiz" component={QuizV2} durationInFrames={quizFrames(E98CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E98CFG }} />
      <Composition id="Thumb98" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "birds", grid: ["scarlet-macaw", "bald-eagle", "?", "greater-flamingo", "?", "toco-toucan", "?", "emperor-penguin", "indian-peafowl"], line1: "CAN YOU NAME ALL", word: "ZOOMED BIRD", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E99Quiz" component={QuizV2} durationInFrames={quizFrames(E99CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E99CFG }} />
      <Composition id="Thumb99" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "gems", grid: ["diamond", "ruby", "?", "emerald", "?", "sapphire", "?", "amethyst", "opal"], line1: "CAN YOU NAME ALL", word: "ZOOMED GEM", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E101Quiz" component={QuizV2} durationInFrames={quizFrames(E101CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E101CFG }} />
      <Composition id="Thumb101" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "fish", grid: ["clownfish", "whale-shark", "?", "mandarinfish", "?", "koi", "?", "angelfish", "moray-eel"], line1: "CAN YOU NAME ALL", word: "ZOOMED FISH", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E103Quiz" component={QuizV2} durationInFrames={quizFrames(E103CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E103CFG }} />
      <Composition id="Thumb103" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "flowers", grid: ["common-poppy", "iris", "?", "orchid", "?", "sunflower", "?", "pansy", "daffodil"], line1: "CAN YOU NAME ALL", word: "ZOOMED FLOWER", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E104Quiz" component={QuizV2} durationInFrames={quizFrames(E104CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E104CFG }} />
      <Composition id="Thumb104" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "insects", grid: ["ladybug", "monarch-butterfly", "?", "honey-bee", "?", "dragonfly", "?", "wasp", "hornet"], line1: "CAN YOU NAME ALL", word: "ZOOMED INSECT", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E105Quiz" component={QuizV2} durationInFrames={quizFrames(E105CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E105CFG }} />
      <Composition id="Thumb105" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "butterflies", grid: ["monarch", "blue-morpho", "?", "tiger-swallowtail", "?", "peacock-butterfly", "?", "zebra-longwing", "atlas-moth"], line1: "CAN YOU NAME ALL", word: "ZOOMED BUTTERFLY", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E110Quiz" component={QuizV2} durationInFrames={quizFrames(E110CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E110CFG }} />
      <Composition id="Thumb110" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "spiders", grid: ["peacockspider", "cobaltbluetarantula", "?", "goldsilkorbweaver", "?", "candystripespider", "?", "wheelspider", "blackwidow"], line1: "CAN YOU NAME ALL", word: "ZOOMED SPIDER", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E112Quiz" component={QuizV2} durationInFrames={quizFrames(E112CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E112CFG }} />
      <Composition id="Thumb112" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "amphibians", grid: ["firesalamander", "goldenpoisonfrog", "?", "bluespottedsalamander", "?", "goldentoad", "?", "axolotl", "tigersalamander"], line1: "CAN YOU NAME ALL", word: "ZOOMED AMPHIBIAN", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E114Quiz" component={QuizV2} durationInFrames={quizFrames(E114CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E114CFG }} />
      <Composition id="Thumb114" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "dinosilhouette", grid: ["trex", "triceratops", "stegosaurus", "?", "ankylosaurus", "?", "spinosaurus", "?", "velociraptor"], line1: "CAN YOU NAME ALL", word: "DINOSAUR", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E115Quiz" component={QuizV2} durationInFrames={quizFrames(E115CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E115CFG }} />
      <Composition id="Thumb115" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "scrambled", grid: ["RFEACN", "AJAPN", "NHCAI", "?", "ARUISS", "?", "IBZALR", "?", "TPYEG"], line1: "CAN YOU NAME ALL", word: "COUNTRY", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E116Quiz" component={QuizV2} durationInFrames={quizFrames(E116CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E116CFG }} />
      <Composition id="Thumb116" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "novowels", grid: ["FRNC", "JPN", "CHN", "?", "RSS", "?", "BRZL", "?", "GYPT"], line1: "CAN YOU NAME ALL", word: "COUNTRY", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E117Quiz" component={QuizV2} durationInFrames={quizFrames(E117CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E117CFG }} />
      <Composition id="Thumb117" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "usstates", grid: ["california", "texas", "?", "florida", "?", "alaska", "?", "hawaii", "new-york"], line1: "CAN YOU NAME ALL", word: "STATE", number: "50", year: "2026", badge: "Only 1% get 50/50" }} />
      <Composition id="E118Quiz" component={QuizV2} durationInFrames={quizFrames(E118CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E118CFG }} />
      <Composition id="Thumb118" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "capitalscrambled", grid: ["RSAIP", "OTKOY", "ROEM", "?", "OCMWSO", "?", "RDIMDA", "?", "RICOA"], line1: "CAN YOU NAME ALL", word: "CAPITAL", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E119Quiz" component={QuizV2} durationInFrames={quizFrames(E119CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E119CFG }} />
      <Composition id="Thumb119" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "reversed", grid: ["ECNARF", "NAPAJ", "ANIHC", "?", "AISSUR", "?", "LIZARB", "?", "TPYGE"], line1: "CAN YOU NAME ALL", word: "COUNTRY", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E120Quiz" component={QuizV2} durationInFrames={quizFrames(E120CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E120CFG }} />
      <Composition id="Thumb120" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "usstatescrambled", grid: ["AXSTE", "IDRFALO", "KLASAA", "?", "WIIHAA", "?", "CIALFNRIOA", "?", "YOK ERNW"], line1: "CAN YOU NAME ALL", word: "STATE", number: "50", year: "2026", badge: "Only 1% get 50/50" }} />
      <Composition id="ThumbRebusTest" component={GsThumbRebus} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ keyword: "WORD", e1: "1F36F", e2: "1F319", year: "2026", badge: "ONLY 1% CAN!" }} />
      <Composition id="RebusDemo" component={RebusDemo} durationInFrames={1} fps={30} width={1920} height={1080} defaultProps={{ e1: "sun", e2: "flower", answer: "Sunflower", opts: ["Marigold", "Sunflower", "Daisy", "Tulip"], correct: 1, num: 3 }} />
      <Composition id="ThumbRebusFluent" component={GsThumbRebus} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ keyword: "WORD", e1: "honey", e2: "moon", edir: "emoji3d", eext: "png", year: "2026", badge: "ONLY 1% CAN!" }} />
      <Composition id="ThumbRebusTwemoji" component={GsThumbRebus} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ keyword: "WORD", e1: "1F36F", e2: "1F319", edir: "twemoji", eext: "svg", year: "2026", badge: "ONLY 1% CAN!" }} />
      <Composition id="E121Quiz" component={QuizV2} durationInFrames={quizFrames(E121CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E121CFG }} />
      <Composition id="Thumb121" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "missingletters", grid: ["_RANC_", "J__AN", "C_I_A", "?", "RUS_I_", "?", "B_AZI_", "?", "E_YP_"], line1: "CAN YOU NAME ALL", word: "COUNTRY", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E122Quiz" component={QuizV2} durationInFrames={quizFrames(E122CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E122CFG }} />
      <Composition id="Thumb122" component={GsThumbRebus} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ keyword: "WORD", e1: "honey", e2: "moon", edir: "emoji3d", eext: "png", year: "2026", badge: "ONLY 1% CAN!" }} />
      <Composition id="E123Quiz" component={QuizV2} durationInFrames={quizFrames(E123CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E123CFG }} />
      <Composition id="Thumb123" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "scrambled", grid: ["JUST DO IT", "THINK", "GOT MILK?", "?", "I'M LOVIN' IT", "?", "EAT FRESH", "?", "ZOOM-ZOOM"], line1: "CAN YOU NAME THE", word: "BRAND", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E124Quiz" component={QuizV2} durationInFrames={quizFrames(E124CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E124CFG }} />
      <Composition id="Thumb124" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F3B5", "1F3A4", "?", "1F3B8", "1F525", "?", "1F3A7", "?", "1F451"], line1: "CAN YOU NAME THE", word: "SONG?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E125Quiz" component={QuizV2} durationInFrames={quizFrames(E125CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E125CFG }} />
      <Composition id="Thumb125" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F3AC", "1F3A5", "?", "1F42F", "1F436", "?", "1F3AB", "?", "1F385"], line1: "CAN YOU NAME THE", word: "MOVIE?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E126Quiz" component={QuizV2} durationInFrames={quizFrames(E126CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E126CFG }} />
      <Composition id="Thumb126" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F44A", "1F435", "?", "1F438", "1F47E", "?", "1F680", "?", "1F497"], line1: "CAN YOU NAME THE", word: "GAME?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E127Quiz" component={QuizV2} durationInFrames={quizFrames(E127CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E127CFG }} />
      <Composition id="Thumb127" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F522", "1F9B8", "?", "1F3E5", "1F47D", "?", "1F48C", "?", "1F50D"], line1: "CAN YOU NAME THE", word: "TV SHOW?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E128Quiz" component={QuizV2} durationInFrames={quizFrames(E128CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E128CFG }} />
      <Composition id="Thumb128" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["26A1", "1F981", "?", "1F36B", "1F9DB", "?", "1F3F9", "?", "1F4D3"], line1: "CAN YOU NAME THE", word: "BOOK?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E129Quiz" component={QuizV2} durationInFrames={quizFrames(E129CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E129CFG }} />
      <Composition id="Thumb129" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F6D2", "1F3AF", "?", "1F355", "1F697", "?", "1F3A5", "?", "1F96A"], line1: "CAN YOU NAME THE", word: "BRAND?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E130Quiz" component={QuizV2} durationInFrames={quizFrames(E130CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E130CFG }} />
      <Composition id="Thumb130" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F354", "1F41F", "?", "1F35D", "1F34E", "?", "1F95A", "?", "1F36B"], line1: "CAN YOU NAME THE", word: "FOOD?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E131Quiz" component={QuizV2} durationInFrames={quizFrames(E131CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E131CFG }} />
      <Composition id="Thumb131" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F987", "1F577", "?", "1F451", "1F7E2", "?", "26A1", "?", "1F3D9"], line1: "CAN YOU NAME THE", word: "HERO?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E132Quiz" component={QuizV2} durationInFrames={quizFrames(E132CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E132CFG }} />
      <Composition id="Thumb132" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["2744", "1F467", "?", "26C4", "1F981", "?", "1F30A", "?", "1FA94"], line1: "CAN YOU NAME THE", word: "DISNEY?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E133Quiz" component={QuizV2} durationInFrames={quizFrames(E133CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E133CFG }} />
      <Composition id="Thumb133" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F98A", "1F30A", "?", "1F409", "1F9F1", "?", "2694", "?", "1F407"], line1: "CAN YOU NAME THE", word: "ANIME?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E134Quiz" component={QuizV2} durationInFrames={quizFrames(E134CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E134CFG }} />
      <Composition id="Thumb134" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F431", "1F436", "?", "1F981", "1F418", "?", "1F42F", "?", "1F434"], line1: "CAN YOU NAME THE", word: "ANIMAL?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E135Quiz" component={QuizV2} durationInFrames={quizFrames(E135CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E135CFG }} />
      <Composition id="Thumb135" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["26BD", "1F3C0", "?", "26BE", "1F3BE", "?", "1F3CF", "?", "1F3D2"], line1: "CAN YOU NAME THE", word: "SPORT?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E136Quiz" component={QuizV2} durationInFrames={quizFrames(E136CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E136CFG }} />
      <Composition id="Thumb136" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F3E5", "1F373", "?", "1F4DA", "1F46E", "?", "1F525", "?", "2708"], line1: "CAN YOU NAME THE", word: "JOB?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E137Quiz" component={QuizV2} durationInFrames={quizFrames(E137CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E137CFG }} />
      <Composition id="Thumb137" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F9FD", "26A1", "?", "1F6F9", "1F369", "?", "1F415", "?", "1F344"], line1: "CAN YOU NAME THE", word: "CARTOON?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E138Quiz" component={QuizV2} durationInFrames={quizFrames(E138CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E138CFG }} />
      <Composition id="Thumb138" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F460", "1F43A", "?", "1F34E", "1F36C", "?", "1F437", "?", "1F43B"], line1: "CAN YOU NAME THE", word: "FAIRY TALE?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E139Quiz" component={QuizV2} durationInFrames={quizFrames(E139CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E139CFG }} />
      <Composition id="Thumb139" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F451", "1FAB2", "?", "1F98D", "1F985", "?", "1F918", "?", "1F48B"], line1: "CAN YOU NAME THE", word: "BAND?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E140Quiz" component={QuizV2} durationInFrames={quizFrames(E140CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E140CFG }} />
      <Composition id="Thumb140" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F34E", "1F34C", "?", "1F353", "1F349", "?", "1F34D", "?", "1F955"], line1: "CAN YOU NAME THE", word: "FRUIT?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E141Quiz" component={QuizV2} durationInFrames={quizFrames(E141CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E141CFG }} />
      <Composition id="Thumb141" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["265F", "1F3A9", "?", "1F9F1", "1F6A2", "?", "1F0CF", "?", "1F300"], line1: "CAN YOU NAME THE", word: "BOARD GAME?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E142Quiz" component={QuizV2} durationInFrames={quizFrames(E142CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E142CFG }} />
      <Composition id="Thumb142" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F697", "1F695", "?", "1F68C", "2708", "?", "1F681", "?", "1F680"], line1: "CAN YOU NAME THE", word: "VEHICLE?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E143Quiz" component={QuizV2} durationInFrames={quizFrames(E143CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E143CFG }} />
      <Composition id="Thumb143" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F384", "1F383", "?", "1F498", "1F430", "?", "1F983", "?", "1F386"], line1: "CAN YOU NAME THE", word: "HOLIDAY?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E144Quiz" component={QuizV2} durationInFrames={quizFrames(E144CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E144CFG }} />
      <Composition id="Thumb144" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F409", "1F984", "?", "1F9DB", "1F43A", "?", "1F47B", "?", "1F9D9"], line1: "CAN YOU NAME THE", word: "MYTHICAL CREATURE?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E145Quiz" component={QuizV2} durationInFrames={quizFrames(E145CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E145CFG }} />
      <Composition id="Thumb145" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F327", "2600", "?", "26C8", "2744", "?", "1F308", "?", "1F32A"], line1: "CAN YOU NAME THE", word: "WEATHER?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E146Quiz" component={QuizV2} durationInFrames={quizFrames(E146CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E146CFG }} />
      <Composition id="Thumb146" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["26A1", "1F531", "?", "1F480", "2694", "?", "1F989", "?", "1F415"], line1: "CAN YOU NAME THE", word: "ANCIENT GOD?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E147Quiz" component={QuizV2} durationInFrames={quizFrames(E147CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E147CFG }} />
      <Composition id="Thumb147" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F3A8", "1F3A3", "?", "1F373", "1F4F7", "?", "1F3AE", "?", "1F3B8"], line1: "CAN YOU NAME THE", word: "HOBBY?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E148Quiz" component={QuizV2} durationInFrames={quizFrames(E148CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E148CFG }} />
      <Composition id="Thumb148" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F5FC", "1F5FD", "?", "1F3DB", "1F42B", "?", "1F3A1", "?", "1F54C"], line1: "CAN YOU NAME THE", word: "CITY?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E149Quiz" component={QuizV2} durationInFrames={quizFrames(E149CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E149CFG }} />
      <Composition id="Thumb149" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1FA70", "1F483", "?", "1F57A", "1F941", "?", "1F339", "?", "1FAAD"], line1: "CAN YOU NAME THE", word: "DANCE?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E150Quiz" component={QuizV2} durationInFrames={quizFrames(E150CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E150CFG }} />
      <Composition id="Thumb150" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F419", "1F988", "?", "1F42C", "1F40B", "?", "1F980", "?", "1FAB8"], line1: "CAN YOU NAME THE", word: "SEA CREATURE?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E151Quiz" component={QuizV2} durationInFrames={quizFrames(E151CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E151CFG }} />
      <Composition id="Thumb151" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F457", "1F455", "?", "1F456", "1F454", "?", "1F460", "?", "1F9E5"], line1: "CAN YOU NAME THE", word: "CLOTHING?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E152Quiz" component={QuizV2} durationInFrames={quizFrames(E152CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E152CFG }} />
      <Composition id="Thumb152" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["2615", "1F375", "?", "1F95B", "1F37A", "?", "1F377", "?", "1F378"], line1: "CAN YOU NAME THE", word: "DRINK?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E153Quiz" component={QuizV2} durationInFrames={quizFrames(E153CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E153CFG }} />
      <Composition id="Thumb153" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F344", "1F3AE", "?", "1F47B", "2B50", "?", "2694", "?", "1F916"], line1: "CAN YOU NAME THE", word: "GAME CHARACTER?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E154Quiz" component={QuizV2} durationInFrames={quizFrames(E154CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E154CFG }} />
      <Composition id="Thumb154" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F0CF", "1F480", "?", "1F608", "1F9B9", "?", "1F5E1", "?", "1F479"], line1: "CAN YOU NAME THE", word: "VILLAIN?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E155Quiz" component={QuizV2} durationInFrames={quizFrames(E155CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E155CFG }} />
      <Composition id="Thumb155" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F9F8", "1FA81", "?", "1FA80", "1F9E9", "?", "1F3B2", "?", "1F388"], line1: "CAN YOU NAME THE", word: "TOY?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E156Quiz" component={QuizV2} durationInFrames={quizFrames(E156CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E156CFG }} />
      <Composition id="Thumb156" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F525", "26A1", "?", "1F35C", "1F98A", "?", "1F452", "?", "1F94B"], line1: "CAN YOU NAME THE", word: "ANIME CHARACTER?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E157Quiz" component={QuizV2} durationInFrames={quizFrames(E157CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E157CFG }} />
      <Composition id="Thumb157" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F95A", "1F9F1", "?", "2B50", "1F411", "?", "1F577", "?", "2614"], line1: "CAN YOU NAME THE", word: "NURSERY RHYME?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E158Quiz" component={QuizV2} durationInFrames={quizFrames(E158CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E158CFG }} />
      <Composition id="Thumb158" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F366", "1F369", "?", "1F9C1", "1F36A", "?", "1F36B", "?", "1F382"], line1: "CAN YOU NAME THE", word: "DESSERT?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E113Quiz" component={QuizV2} durationInFrames={quizFrames(E113CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E113CFG }} />
      <Composition id="Thumb113" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "coatofarms", grid: ["mexico", "united-kingdom", "?", "united-states", "?", "egypt", "?", "zimbabwe", "india"], line1: "CAN YOU NAME ALL", word: "COUNTRY", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E96Quiz" component={QuizV2} durationInFrames={quizFrames(E96CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E96CFG }} />
      <Composition id="Thumb96" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "natteams", grid: ["brazil", "germany", "?", "argentina", "?", "spain", "?", "france", "england"], line1: "CAN YOU NAME ALL", word: "TEAM", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E66Quiz" component={QuizV2} durationInFrames={quizFrames(E66CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E66CFG }} />
      <Composition id="Thumb66" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "rocks", grid: ["granite", "marble", "?", "basalt", "?", "limestone", "?", "sulfur", "gold"], line1: "CAN YOU NAME ALL", word: "ROCK", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E67Quiz" component={QuizV2} durationInFrames={quizFrames(E67CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E67CFG }} />
      <Composition id="Thumb67" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "hats", grid: ["baseballcap", "tophat", "?", "cowboyhat", "?", "chefhat", "?", "witchhat", "sombrero"], line1: "CAN YOU NAME ALL", word: "HAT", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E68Quiz" component={QuizV2} durationInFrames={quizFrames(E68CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E68CFG }} />
      <Composition id="Thumb68" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "drinks", grid: ["espresso", "cappuccino", "?", "latte", "?", "matcha", "?", "greentea", "mocha"], line1: "CAN YOU NAME ALL", word: "DRINK", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E57Quiz" component={QuizV2} durationInFrames={quizFrames(E57CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E57CFG }} />
      <Composition id="Thumb57" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "spiders", grid: ["tarantula", "blackwidow", "?", "jumpingspider", "?", "peacockspider", "?", "wolfspider", "goliathbirdeater"], line1: "CAN YOU NAME ALL", word: "SPIDER", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E56Quiz" component={QuizV2} durationInFrames={quizFrames(E56CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E56CFG }} />
      <Composition id="Thumb56" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "amphibians", grid: ["axolotl", "redeyedtreefrog", "?", "firesalamander", "?", "poisondartfrog", "?", "commontoad", "bullfrog"], line1: "CAN YOU NAME ALL", word: "AMPHIBIAN", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="Thumb70" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "animals2", grid: ["hippo", "rhino", "?", "cheetah", "?", "leopard", "?", "wolf", "fox"], line1: "CAN YOU NAME ALL", word: "ANIMAL", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E76Quiz" component={QuizV2} durationInFrames={quizFrames(E76CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E76CFG }} />
      <Composition id="Thumb76" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "animals3", grid: ["blackbear", "seal", "?", "seaotter", "?", "jackrabbit", "?", "mountaingoat", "pygmyhippo"], line1: "CAN YOU NAME ALL", word: "ANIMAL", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E71Quiz" component={QuizV2} durationInFrames={quizFrames(E71CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E71CFG }} />
      <Composition id="Thumb71" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "landmarks2", grid: ["sphinx", "stonehenge", "?", "empirestate", "?", "towerbridge", "?", "grandcanyon", "hollywood"], line1: "CAN YOU NAME ALL", word: "LANDMARK", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbReptiles" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "reptiles", grid: ["komododragon", "greeniguana", "?", "nilecrocodile", "?", "leopardgecko", "?", "beardeddragon", "galapagostortoise"], line1: "CAN YOU NAME ALL", word: "REPTILE", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbHorses" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "horses", grid: ["arabian", "thoroughbred", "?", "clydesdale", "?", "friesian", "?", "appaloosa", "shire"], line1: "CAN YOU NAME ALL", word: "HORSE BREED", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="ThumbGems" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "gems", grid: ["diamond", "ruby", "?", "emerald", "?", "amethyst", "?", "opal", "garnet"], line1: "CAN YOU NAME ALL", word: "GEMSTONE", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E43Quiz" component={QuizV2} durationInFrames={quizFrames(E43CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E43CFG }} />
      <Composition id="E44Quiz" component={QuizV2} durationInFrames={quizFrames(E44CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E44CFG }} />
      <Composition id="E42Quiz" component={QuizV2} durationInFrames={quizFrames(E42CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E42CFG }} />
      <Composition id="ThumbInstruments" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "instruments", grid: ["guitar", "piano", "?", "violin", "?", "saxophone", "?", "trumpet", "harp"], line1: "CAN YOU NAME ALL", word: "INSTRUMENT", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E38Quiz" component={QuizV2} durationInFrames={quizFrames(E38CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E38CFG }} />
      <Composition id="E85Quiz" component={QuizV2} durationInFrames={quizFrames(E85CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E85CFG }} />
      <Composition id="Thumb85" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "insects2", grid: ["rose-chafer", "paper-wasp", "?", "emperor-dragonfly", "?", "chinese-mantis", "?", "carpenter-ant", "cockchafer"], line1: "CAN YOU NAME ALL", word: "INSECT", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E86Quiz" component={QuizV2} durationInFrames={quizFrames(E86CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E86CFG }} />
      <Composition id="Thumb86" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "emoji", grid: ["1F451", "1F409", "?", "1F422", "?", "1F6D5", "?", "1F98D", "1F3DC"], line1: "CAN YOU NAME ALL", word: "EMOJI?", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="Thumb87" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "sea2", grid: ["blue-whale", "blue-shark", "?", "giant-squid", "?", "box-jellyfish", "?", "spotted-eagle-ray", "coconut-crab"], line1: "CAN YOU NAME ALL", word: "SEA CREATURE", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="Thumb88" component={GsThumbV2} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "butterflies2", grid: ["black-swallowtail", "common-birdwing", "?", "white-peacock", "?", "owl-moth", "?", "indian-moon-moth", "queen-alexandras-birdwing"], line1: "CAN YOU NAME ALL", word: "BUTTERFLY", number: "100", year: "2026", badge: "Only 1% get 100%" }} />
      <Composition id="E39Quiz" component={QuizV2} durationInFrames={quizFrames(E39CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E39CFG }} />
      <Composition id="E69Quiz" component={QuizV2} durationInFrames={quizFrames(E69CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E69CFG }} />
      <Composition id="E40Quiz" component={QuizV2} durationInFrames={quizFrames(E40CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E40CFG }} />
      <Composition id="E34Quiz" component={QuizV2} durationInFrames={quizFrames(E34CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E34CFG }} />
      <Composition id="E33Quiz" component={QuizV2} durationInFrames={quizFrames(E33CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E33CFG }} />
      <Composition id="E35Quiz" component={QuizV2} durationInFrames={quizFrames(E35CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E35CFG }} />
      <Composition id="E37Quiz" component={QuizV2} durationInFrames={quizFrames(E37CFG)} fps={30} width={1920} height={1080} defaultProps={{ config: E37CFG }} />
      <Composition id="ThumbLogosV4" component={GsThumbV4} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "logos", word: "LOGO?", wordImg: "brand/word3d-logo.png", grid: ["apple", "nike", "?", "mcdonalds", "?", "cocacola", "?", "netflix", "spotify"] }} />
      <Composition id="ThumbSnakesV4" component={GsThumbV4} durationInFrames={1} fps={30} width={1280} height={720} defaultProps={{ mode: "snakes", word: "SNAKE?", wordImg: "brand/word3d-snake.png", grid: ["king-cobra", "green-tree-python", "?", "gaboon-viper", "?", "corn-snake", "?", "eyelash-viper", "eastern-coral-snake"] }} />
      {/* ── الشورتس العمودية (1080×1920) — 5 شورتات لكل حلقة (part 0..4، بلا تكرار) ── */}
      {[
        { ep: "E01", items: LOGOS, mode: "logos", title: "Guess the Logo", v2: true },
        { ep: "E02", items: FLAGS, mode: "flags", title: "Guess the Flag", v2: true },
        { ep: "E73", items: FLAGZOOM, mode: "flagzoom", title: "Guess the Zoomed Flag", v2: true },
        { ep: "E75", items: ANIMALZOOM, mode: "animals", title: "Guess the Zoomed Animal", v2: true, zoom: { scale: 3.0 } },
        { ep: "E79", items: LANDMARKZOOM, mode: "landmarkzoom", title: "Guess the Zoomed Landmark", v2: true, zoom: { scale: 3.0 } },
        { ep: "E83", items: FOODZOOM, mode: "foodzoom", title: "Guess the Zoomed Food", v2: true, zoom: { scale: 3.0 } },
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
        { ep: "E74", items: FOODS2, mode: "foods2", title: "Guess the Dish", v2: true },
        { ep: "E15", items: DOGS, mode: "dogs", title: "Guess the Dog Breed", v2: true },
        { ep: "E81", items: DOGS2, mode: "dogs2", title: "Guess the Dog Breed 2", v2: true },
        { ep: "E82", items: FLOWERS2, mode: "flowers2", title: "Guess the Flower 2", v2: true },
        { ep: "E16", items: LANDMARKS, mode: "landmarks", title: "Guess the Landmark", v2: true },
        { ep: "E17", items: CARS, mode: "cars", title: "Guess the Car", v2: true },
        { ep: "E78", items: CARS2, mode: "cars2", title: "Guess the Car 2", v2: true },
        { ep: "E97", items: CARZOOM, mode: "cars", title: "Guess the Zoomed Car", v2: true, zoom: { scale: 3.0 }, theme: 2 },
        { ep: "E98", items: BIRDZOOM, mode: "birds", title: "Guess the Zoomed Bird", v2: true, zoom: { scale: 3.0 }, theme: 2 },
        { ep: "E99", items: GEMZOOM, mode: "gems", title: "Guess the Zoomed Gemstone", v2: true, zoom: { scale: 3.0 }, theme: 2 },
        { ep: "E101", items: FISHZOOM, mode: "fish", title: "Guess the Zoomed Fish", v2: true, zoom: { scale: 3.0 }, theme: 2 },
        { ep: "E103", items: FLOWERZOOM, mode: "flowers", title: "Guess the Zoomed Flower", v2: true, zoom: { scale: 3.0 }, theme: 2 },
        { ep: "E104", items: INSECTZOOM, mode: "insects", title: "Guess the Zoomed Insect", v2: true, zoom: { scale: 3.0 }, theme: 2 },
        { ep: "E105", items: BUTTERFLYZOOM, mode: "butterflies", title: "Guess the Zoomed Butterfly", v2: true, zoom: { scale: 3.0 }, theme: 2 },
        { ep: "E110", items: SPIDERZOOM, mode: "spiders", title: "Guess the Zoomed Spider", v2: true, zoom: { scale: 3.0 }, theme: 3 },
        { ep: "E112", items: AMPHIBIANZOOM, mode: "amphibians", title: "Guess the Zoomed Amphibian", v2: true, zoom: { scale: 3.0 }, theme: 3 },
        { ep: "E96", items: NATTEAMS, mode: "natteams", title: "Guess the National Team Badge", v2: true, theme: 2 },
        { ep: "E113", items: COAT_OF_ARMS, mode: "coatofarms", title: "Guess the Country by Coat of Arms", v2: true, theme: 3 },
        { ep: "E114", items: DINO_SILHOUETTES, mode: "dinosilhouette", title: "Guess the Dinosaur by its Shadow", v2: true, theme: 3 },
        { ep: "E115", items: SCRAMBLED, mode: "scrambled", title: "Guess the Country by Scrambled Name", v2: true, theme: 3 },
        { ep: "E116", items: NO_VOWELS, mode: "novowels", title: "Guess the Country Without Vowels", v2: true, theme: 4 },
        { ep: "E117", items: US_STATES, mode: "usstates", title: "Guess the US State on the Map", v2: true, theme: 4 },
        { ep: "E118", items: CAPITAL_SCRAMBLED, mode: "capitalscrambled", title: "Guess the Capital by Scrambled Name", v2: true, theme: 4 },
        { ep: "E119", items: REVERSED, mode: "reversed", title: "Guess the Country by Reversed Name", v2: true, theme: 4 },
        { ep: "E120", items: USSTATE_SCRAMBLED, mode: "usstatescrambled", title: "Guess the US State by Scrambled Name", v2: true, theme: 4 },
        { ep: "E121", items: MISSING_LETTERS, mode: "missingletters", title: "Guess the Country by Missing Letters", v2: true, theme: 4 },
        { ep: "E122", items: EMOJI_WORD, mode: "emojiword", title: "Guess the Word by Emoji", v2: true, theme: 4 },
        { ep: "E123", items: BRAND_SLOGAN, mode: "slogan", title: "Guess the Brand by its Slogan", v2: true, theme: 4 },
        { ep: "E124", items: EMOJI_SONGS_2, mode: "esongs2", title: "Guess the Song by Emoji 2", v2: true, theme: 4 },
        { ep: "E125", items: MOVIE_EMOJI_2, mode: "movies2", title: "Guess the Movie by Emoji 2", v2: true, theme: 4 },
        { ep: "E126", items: GAME_EMOJI_2, mode: "egames2", title: "Guess the Video Game by Emoji 2", v2: true, theme: 5 },
        { ep: "E127", items: TV_EMOJI_2, mode: "etv2", title: "Guess the TV Show by Emoji 2", v2: true, theme: 5 },
        { ep: "E128", items: BOOK_EMOJI_2, mode: "ebooks2", title: "Guess the Book by Emoji 2", v2: true, theme: 5 },
        { ep: "E129", items: BRAND_EMOJI_2, mode: "ebrands2", title: "Guess the Brand by Emoji 2", v2: true, theme: 5 },
        { ep: "E130", items: FOOD_EMOJI_2, mode: "efoods2", title: "Guess the Food by Emoji 2", v2: true, theme: 5 },
        { ep: "E131", items: HERO_EMOJI, mode: "eheroes", title: "Guess the Superhero by Emoji", v2: true, theme: 5 },
        { ep: "E132", items: DISNEY_EMOJI, mode: "edisney", title: "Guess the Disney Character by Emoji", v2: true, theme: 5 },
        { ep: "E133", items: ANIME_EMOJI, mode: "eanime", title: "Guess the Anime by Emoji", v2: true, theme: 5 },
        { ep: "E134", items: ANIMAL_EMOJI, mode: "eanimal", title: "Guess the Animal by Emoji", v2: true, theme: 5 },
        { ep: "E135", items: SPORTS_EMOJI, mode: "esports", title: "Guess the Sport by Emoji", v2: true, theme: 5 },
        { ep: "E136", items: JOBS_EMOJI, mode: "ejobs", title: "Guess the Job by Emoji", v2: true, theme: 6 },
        { ep: "E137", items: CARTOON_EMOJI, mode: "ecartoon", title: "Guess the Cartoon Character by Emoji", v2: true, theme: 6 },
        { ep: "E138", items: FAIRYTALE_EMOJI, mode: "efairytale", title: "Guess the Fairy Tale by Emoji", v2: true, theme: 6 },
        { ep: "E139", items: BAND_EMOJI, mode: "eband", title: "Guess the Band by Emoji", v2: true, theme: 6 },
        { ep: "E140", items: FRUIT_EMOJI, mode: "efruit", title: "Guess the Fruit or Vegetable by Emoji", v2: true, theme: 6 },
        { ep: "E141", items: BOARDGAME_EMOJI, mode: "eboardgame", title: "Guess the Board Game by Emoji", v2: true, theme: 6 },
        { ep: "E142", items: VEHICLE_EMOJI, mode: "evehicle", title: "Guess the Vehicle by Emoji", v2: true, theme: 6 },
        { ep: "E143", items: HOLIDAY_EMOJI, mode: "eholiday", title: "Guess the Holiday by Emoji", v2: true, theme: 6 },
        { ep: "E144", items: MYTHCREATURE_EMOJI, mode: "emythcreature", title: "Guess the Mythical Creature by Emoji", v2: true, theme: 6 },
        { ep: "E145", items: WEATHER_EMOJI, mode: "eweather", title: "Guess the Weather or Nature Phenomenon by Emoji", v2: true, theme: 6 },
        { ep: "E146", items: MYTHGOD_EMOJI, mode: "eancientgod", title: "Guess the Ancient God by Emoji", v2: true, theme: 6 },
        { ep: "E147", items: HOBBY_EMOJI, mode: "ehobby", title: "Guess the Hobby by Emoji", v2: true, theme: 6 },
        { ep: "E148", items: CITY_EMOJI, mode: "ecity", title: "Guess the City by Emoji", v2: true, theme: 6 },
        { ep: "E149", items: DANCE_EMOJI, mode: "edance", title: "Guess the Dance by Emoji", v2: true, theme: 6 },
        { ep: "E150", items: SEACREATURE_EMOJI, mode: "eseacreature", title: "Guess the Sea Creature by Emoji", v2: true, theme: 6 },
        { ep: "E151", items: CLOTHING_EMOJI, mode: "eclothing", title: "Guess the Clothing by Emoji", v2: true, theme: 6 },
        { ep: "E152", items: DRINK_EMOJI, mode: "edrink", title: "Guess the Drink by Emoji", v2: true, theme: 6 },
        { ep: "E153", items: GAMECHAR_EMOJI, mode: "egamechar", title: "Guess the Video Game Character by Emoji", v2: true, theme: 6 },
        { ep: "E154", items: VILLAIN_EMOJI, mode: "evillain", title: "Guess the Villain by Emoji", v2: true, theme: 6 },
        { ep: "E155", items: TOY_EMOJI, mode: "etoy", title: "Guess the Toy by Emoji", v2: true, theme: 6 },
        { ep: "E156", items: ANIMECHAR_EMOJI, mode: "eanimechar", title: "Guess the Anime Character by Emoji", v2: true, theme: 6 },
        { ep: "E157", items: RHYME_EMOJI, mode: "erhyme", title: "Guess the Nursery Rhyme by Emoji", v2: true, theme: 6 },
        { ep: "E158", items: DESSERT_EMOJI, mode: "edessert", title: "Guess the Dessert by Emoji", v2: true, theme: 6 },
        { ep: "E18", items: PAINTINGS, mode: "paintings", title: "Guess the Painting", v2: true },
        { ep: "E19", items: BIRDS, mode: "birds", title: "Guess the Bird", v2: true },
        { ep: "E80", items: BIRDS2, mode: "birds2", title: "Guess the Bird 2", v2: true },
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
        { ep: "E72", items: LOGOS5, mode: "logos", title: "Guess the Brand Logo 2", v2: true },
        { ep: "E77", items: LOGOS6, mode: "logos", title: "Guess the Brand Logo 3", v2: true },
        { ep: "E31", items: EMOJI_GAMES, mode: "egames", title: "Guess the Video Game by Emoji", v2: true },
        { ep: "E32", items: EMOJI_COUNTRIES, mode: "ecountries", title: "Guess the Country by Emoji", v2: true },
        { ep: "E29", items: GAMINGLOGOS, mode: "gaming", title: "Guess the Gaming Logo", v2: true },
        { ep: "E36", items: FISH, mode: "fish", title: "Guess the Fish", v2: true },
        { ep: "E84", items: FISH2, mode: "fish2", title: "Guess the Fish 2", v2: true },
        { ep: "E64", items: COCKTAILS, mode: "cocktails", title: "Guess the Cocktail", v2: true },
        { ep: "E65", items: BREADS, mode: "breads", title: "Guess the Bread", v2: true },
        { ep: "E62", items: NUTS, mode: "nuts", title: "Guess the Nut or Seed", v2: true },
        { ep: "E63", items: CACTI, mode: "cacti", title: "Guess the Cactus or Succulent", v2: true },
        { ep: "E61", items: DESSERTS, mode: "desserts", title: "Guess the Dessert", v2: true },
        { ep: "E53", items: KITCHEN, mode: "kitchen", title: "Guess the Kitchen Utensil", v2: true },
        { ep: "E60", items: SPICES, mode: "spices", title: "Guess the Herb or Spice", v2: true },
        { ep: "E41", items: PASTA, mode: "pasta", title: "Guess the Pasta", v2: true },
        { ep: "E49", items: CHEESES, mode: "cheese", title: "Guess the Cheese", v2: true },
        { ep: "E58", items: TRAINS, mode: "trains", title: "Guess the Train", v2: true },
        { ep: "E59", items: PRIMATES, mode: "primates", title: "Guess the Primate", v2: true },
        { ep: "E55", items: BOATS, mode: "boats", title: "Guess the Boat", v2: true },
        { ep: "E52", items: SHELLS, mode: "shells", title: "Guess the Seashell", v2: true },
        { ep: "E50", items: MUSHROOMS, mode: "mushrooms", title: "Guess the Mushroom", v2: true },
        { ep: "E54", items: AIRCRAFT, mode: "aircraft", title: "Guess the Aircraft", v2: true },
        { ep: "E46", items: TREES, mode: "trees", title: "Guess the Tree", v2: true },
        { ep: "E48", items: TOOLS, mode: "tools", title: "Guess the Tool", v2: true },
        { ep: "E45", items: REPTILES, mode: "reptiles", title: "Guess the Reptile", v2: true },
        { ep: "E92", items: REPTILES2, mode: "reptiles2", title: "Guess the Reptile 2", v2: true, theme: 1 },
        { ep: "E100", items: REPTILEZOOM, mode: "reptiles", title: "Guess the Zoomed Reptile", v2: true, zoom: { scale: 3.0 }, theme: 2 },
        { ep: "E90", items: SILHOUETTES, mode: "silhouette", title: "Guess the Animal by Silhouette", v2: true, theme: 1 },
        { ep: "E93", items: MUSHROOMS2, mode: "mushrooms2", title: "Guess the Mushroom 2", v2: true, theme: 1 },
        { ep: "E70", items: ANIMALS2, mode: "animals2", title: "Guess the Animal 2", v2: true },
        { ep: "E76", items: ANIMALS3, mode: "animals3", title: "Guess the Animal 3", v2: true },
        { ep: "E71", items: LANDMARKS2, mode: "landmarks2", title: "Guess the Landmark 2", v2: true },
        { ep: "E66", items: ROCKS, mode: "rocks", title: "Guess the Rock or Mineral", v2: true },
        { ep: "E67", items: HATS, mode: "hats", title: "Guess the Hat", v2: true },
        { ep: "E68", items: DRINKS, mode: "drinks", title: "Guess the Drink", v2: true },
        { ep: "E57", items: SPIDERS, mode: "spiders", title: "Guess the Spider", v2: true },
        { ep: "E56", items: AMPHIBIANS, mode: "amphibians", title: "Guess the Amphibian", v2: true },
        { ep: "E34", items: CATS, mode: "cats", title: "Guess the Cat Breed", v2: true },
        { ep: "E33", items: EMOJI_TV, mode: "etv", title: "Guess the TV Show by Emoji", v2: true },
        { ep: "E35", items: EMOJI_BRANDS, mode: "ebrands", title: "Guess the Brand by Emoji", v2: true },
        { ep: "E37", items: EMOJI_BOOKS, mode: "ebooks", title: "Guess the Book by Emoji", v2: true },
        { ep: "E38", items: INSECTS, mode: "insects", title: "Guess the Insect", v2: true },
        { ep: "E85", items: INSECTS2, mode: "insects2", title: "Guess the Insect 2", v2: true },
        { ep: "E86", items: EMOJI_COUNTRIES2, mode: "ecountries2", title: "Guess the Country by Emoji 2", v2: true, theme: 1 },
        { ep: "E87", items: SEA2, mode: "sea2", title: "Guess the Sea Creature 2", v2: true, theme: 1 },
        { ep: "E88", items: BUTTERFLIES2, mode: "butterflies2", title: "Guess the Butterfly 2", v2: true, theme: 1 },
        { ep: "E89", items: LOGOS7, mode: "logos", title: "Guess the Brand Logo 4", v2: true, theme: 1 },
        { ep: "E91", items: COUNTRYMAP, mode: "countrymap", title: "Guess the Country on the Map", v2: true, theme: 1 },
        { ep: "E39", items: AIRLINELOGOS, mode: "airlines", title: "Guess the Airline Logo", v2: true },
        { ep: "E69", items: FASTFOOD, mode: "fastfood", title: "Guess the Fast-Food Logo", v2: true },
        { ep: "E40", items: CLUBBADGES, mode: "clubbadges", title: "Guess the Football Club Badge", v2: true },
        { ep: "E42", items: INSTRUMENTS, mode: "instruments", title: "Guess the Musical Instrument", v2: true },
        { ep: "E43", items: HORSES, mode: "horses", title: "Guess the Horse Breed", v2: true },
        { ep: "E44", items: GEMS, mode: "gems", title: "Guess the Gemstone", v2: true },
        { ep: "E51", items: SPACE, mode: "space", title: "Guess the Space Object", v2: true },
        { ep: "E47", items: SPORTS, mode: "sports", title: "Guess the Sport", v2: true },
        { ep: "E94", items: FLAGS_MEGA, mode: "flagsmega", title: "195 Flags of the World", v2: true, theme: 1 },
        { ep: "E95", items: LOGOS_MEGA, mode: "logos", title: "300 Logos", v2: true, theme: 1 },
      ].flatMap((e) =>
        [0, 1, 2, 3, 4].map((part) => (
          <Composition key={`${e.ep}-${part}`} id={`Short-${e.ep}-${part + 1}`} component={e.v2 ? ShortV2Quiz : ShortQuiz} durationInFrames={e.v2 ? SHORTV2_FRAMES : SHORT_FRAMES} fps={30} width={1080} height={1920} defaultProps={{ items: e.items, mode: e.mode, title: e.title, part, zoom: e.zoom || null, theme: e.theme || 0 }} />
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
