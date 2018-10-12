const slideShow = {
      photoList: ['one', 'two', 'three', 'four', 'five'],
      currentPhotoIndex: 0 +
      nextPhoto: function() {
        if (this.currentPhotoIndex < this.photoList.length-1) {
          this.currentPhotoIndex += 1;
          console.log(this.photoList[this.currentPhotoIndex]);
        } else {
          console.log('End of slideshow')
        }
      },
      prevPhoto: function() {
          if (this.currentPhotoIndex !== 0) {
            this.currentPhotoIndex -= 1;
            console.log(this.photoList[this.currentPhotoIndex]);
          } else {
            console.log('Beginning of slideshow');
          }
      },
      getCurrentPhoto: function(){
          return this.photoList[this.currentPhotoIndex];
      }

};


console.log(slideShow.currentPhotoIndex);
console.log(slideShow.photoList[3]);
console.log(slideShow.currentPhotoIndex);
console.log(slideShow.prevPhoto());
console.log(slideShow.currentPhotoIndex);
