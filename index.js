$(document).ready(function () {
  // Fetch top anime
  $.ajax({
    url: "https://api.jikan.moe/v4/top/anime",
    type: "GET",
    success: function (response) {
      var animes = response.data;
      animes.forEach(function (anime) {
        var card = `
                            <div class="col-md-3 mb-4">
                                <div class="card h-100">
                                    <img src="${
                                      anime.images.jpg.large_image_url
                                    }" class="card-img-top" alt="${
          anime.title
        }">
                                    <div class="card-body d-flex flex-column">
                                        <h5 class="card-title text-truncate">${
                                          anime.title
                                        }</h5>
                                        <p class="card-text mt-2">
                                            <span class="badge badge-info rounded-pill p-2">${
                                              anime.type
                                            }</span>
                                            <span class="badge badge-success rounded-pill p-2">Rating: ${
                                              anime.score || "N/A"
                                            }</span>
                                            <span class="badge badge-secondary rounded-pill p-2">ep: ${
                                              anime.episodes || "N/A"
                                            }</span>
                                        </p>
                                        <a href="${
                                          anime.url
                                        }" class="btn btn-primary mt-auto" target="_blank">Watch Now</a>
                                    </div>
                                </div>
                            </div>
                        `;
        $("#anime-cards").append(card);
      });
    },
    error: function (error) {
      console.log("Error fetching anime data:", error);
    },
  });
});
