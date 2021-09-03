
class Media{
  constructor(title){
    this._title = title;
    this._ratings = [];
    this._isCheckedOut = false;
  }

  get title(){
    return this._title;
  }

  get isCheckedOut(){
  return this._isCheckedOut;
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

  toggleCheckOutStatus(){
    this._isCheckedOut == false ? this._isCheckedOut = true : this._isCheckedOut = false;
  }

  addRating(newRating){
    this._ratings.push(newRating);
  }
}

// --------- Start of BOOK class (subclass)---------
class Book extends Media{
  constructor(author, title, pages, ratings){
    super(title, ratings);
    this._author = author;
    this._pages = pages;
  }

  get author(){
    return this._author;
}

  get pages(){
    return this._pages;
}

}

// --------- Start of MOVIE class (subclass) ---------
class Movie extends Media{

}

// --------- Start of CD class (subclass) ---------
class CD extends Media{

}
