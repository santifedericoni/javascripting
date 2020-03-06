
var blocksAway = function (indication){
var north = 0;
var east = 0;
var direction;
if (indication[0] == 'right'){
  direction = 'east'
  east = east + indication[1];
}
else if (indication[0] == 'left'){
  direction = 'north'
  north = north + indication[1];
}

for(var i = 2 ; i < indication.length ; i++){
  if (direction == 'north'){
    if (indication[i] == 'right'){
      direction = 'east';
      east = east + indication[i+1];
    }
    else if (indication[i] == 'left'){
      direction = 'west';
      east = east - indication[i+1];
    }
  }
  else if (direction == 'west'){
    if (indication[i] == 'right'){
      direction = 'north';
      north = north + indication[i+1];
    }
    else if (indication[i] == 'left'){
      direction = 'south';
      north = north + indication[i+1];
    }
  }
  else if (direction == 'east'){
    if (indication[i] == 'right'){
      direction = 'south';
      north = north - indication[i+1];
    }
    else if (indication[i] == 'left'){
      direction = 'north';
      north = north + indication[i+1];
    }
  }
  else if (direction == 'south'){
    if (indication[i] == 'right'){
      direction = 'west';
      east = east - indication[i+1];
    }
    else if (indication[i] == 'left'){
      direction = 'east';
      east = east + indication[i+1];
    }
  }
  i++;
}
console.log('East: ' + east + ' ' + 'North: ' + north)
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));