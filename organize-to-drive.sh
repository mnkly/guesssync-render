#!/usr/bin/env bash
# Organize rendered artifacts (out/pull1, out/pull2) into G:\My Drive\GuessSync\02_Episodes
set -u
cd "$(dirname "$0")" || exit 1
DRIVE="/g/My Drive/GuessSync/02_Episodes"
declare -A NAME=(
 [56]="Guess-the-Amphibian" [57]="Guess-the-Spider" [66]="Guess-the-Rock"
 [69]="Guess-the-Fast-Food-Logo" [70]="Guess-the-Animal-2" [71]="Guess-the-Landmark-2"
 [72]="Guess-the-Brand-Logo-2" [73]="Guess-the-Zoomed-Flag" [74]="Guess-the-Dish"
 [75]="Guess-the-Zoomed-Animal" [76]="Guess-the-Animal-3" [77]="Guess-the-Brand-Logo-3"
 [78]="Guess-the-Car-2" [79]="Guess-the-Zoomed-Landmark" [80]="Guess-the-Bird-2"
 [81]="Guess-the-Dog-Breed-2" [82]="Guess-the-Flower-2" [83]="Guess-the-Zoomed-Food"
 [84]="Guess-the-Fish-2"
)
find_art() { # $1 = comp id, echoes path to file (mp4 or png) if found
  for p in out/pull1 out/pull2; do
    for ext in mp4 png; do
      [ -f "$p/$1/$1.$ext" ] && { echo "$p/$1/$1.$ext"; return; }
    done
  done
}
for n in 56 57 66 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84; do
  # pick existing Drive folder if present, else create with convention name
  ex=$(ls -d "$DRIVE"/E${n}_* 2>/dev/null | head -1)
  if [ -n "$ex" ]; then dir="$ex"; else dir="$DRIVE/E${n}_${NAME[$n]}"; fi
  mkdir -p "$dir/video" "$dir/short" "$dir/thumbnail"
  # long video
  lv=$(find_art "E${n}Quiz")
  if [ -n "$lv" ]; then cp -f "$lv" "$dir/video/E${n}_long.mp4"; longok="✓"; else longok="MISSING"; fi
  # shorts
  sc=0
  for s in 1 2 3 4 5; do
    sv=$(find_art "Short-E${n}-${s}")
    [ -n "$sv" ] && { cp -f "$sv" "$dir/short/E${n}_short_${s}.mp4"; sc=$((sc+1)); }
  done
  # thumbnail
  tn="Thumb${n}"; [ "$n" = "69" ] && tn="ThumbFastfood"
  tv=$(find_art "$tn")
  [ -n "$tv" ] && { cp -f "$tv" "$dir/thumbnail/E${n}_thumb.png"; tok="✓"; } || tok="MISSING"
  echo "E${n}: long=$longok shorts=${sc}/5 thumb=$tok -> $(basename "$dir")"
done
echo "ORGANIZE DONE"
