// 제스민 코드 (테스트 코드)

// Player 이름
describe("Player", function () {
  let player;
  let song;

  beforeEach(function () {
    player = new Player();
    song = new Song();
  });

  // 뒤의 함수에 대한설명
  it("should be able to play a Song", function () {
    player.play(song);
    // 기대함 player.currentlyPlayingSong이 song이랑 같기를
    expect(player.currentlyPlayingSong).toEqual(song);

    // demonstrates use of custom matcher
    expect(player).toBePlaying(song);
  });

  describe("when song has been paused", function () {
    beforeEach(function () {
      player.play(song);
      player.pause();
    });

    it("should indicate that the song is currently paused", function () {
      expect(player.isPlaying).toBeFalsy();

      // demonstrates use of 'not' with a custom matcher
      expect(player).not.toBePlaying(song);
    });

    it("should be possible to resume", function () {
      player.resume();
      expect(player.isPlaying).toBeTruthy();
      expect(player.currentlyPlayingSong).toEqual(song);
    });
  });

  // demonstrates use of spies to intercept and test method calls
  it("tells the current song if the user has made it a favorite", function () {
    spyOn(song, "persistFavoriteStatus");

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe("#resume", function () {
    it("should throw an exception if song is already playing", function () {
      player.play(song);

      expect(function () {
        player.resume();
      }).toThrowError("song is already playing");
    });
  });
});
