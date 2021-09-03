
class Media{
  constructor(title, ratings){
    this._title = title;
    this._ratings = ratings;
  }

  get title(){
    return this._title;
  }

  get ratings(){
    return this._ratings;
  }

  getAverageRating(ratingsArray){
      const averageRating = 0;
      for (var i = 0; i < ratingsArray.length; i++) {
        averageRating += array[i]
      }
        return averageRating / ratingsArray.length;
  }

  addRating(newRating){
    this._ratings.push(newRating);
  }
}

// --------- Start of BOOK class (subclass)---------
class Book extends Media{

}

// --------- Start of MOVIE class (subclass) ---------
class Movie extends Media{

}

// --------- Start of CD class (subclass) ---------
class CD extends Media{

}
