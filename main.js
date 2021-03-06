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

  set isCheckedOut(newCheckOutStatus) {
    this._isCheckedOut = newCheckOutStatus;
  }

  get ratings(){
    return this._ratings;
  }

  getAverageRating(ratings){
      let averageRating = 0;
      for (var i = 0; i < ratings.length; i++) {
        averageRating += ratings[i]
      }
        return Math.floor(averageRating / ratings.length);
  }

  toggleCheckOutStatus(){
    this.isCheckedOut = !this.isCheckedOut;
  }

  addRating(newRating){
    this._ratings.push(newRating);
  }
}

// --------- Start of BOOK class (subclass)---------
class Book extends Media{
  constructor(author, title, pages){
    super(title);
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
  constructor(director, title, runTime){
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director(){
  return this._director;
  }

  get runTime(){
    return this._runTime;
  }
}

// --------- Start of CD class (subclass) ---------
class CD extends Media{
  constructor(artist, title, songs){
    super(title);
    this._artist = artist;
    this._title = title;
    this._songs = songs;
  }

  get artist(){
    return this._artist;
  }

  get title(){
    return this._title;
  }

  get songs(){
    return this._songs;
  }
}
