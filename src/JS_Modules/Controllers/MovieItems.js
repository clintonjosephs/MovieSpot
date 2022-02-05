const movieItems = (showDetails) => `<div class="col-md-3 animate">
                <div class="card my-3">
                    <img src="${
                      showDetails?.image?.medium ??
                      "https://www.freeiconspng.com/uploads/no-image-icon-23.jpg"
                    }" class="card-img-top" alt="${showDetails?.name}">
                    <div class="card-body">
                        <div class="card-title">
                            <h6>${
                              showDetails.name.length <= 14
                                ? showDetails?.name ?? "No name"
                                : `${showDetails.name.substr(0, 14)}...`
                            }</h6>
                            <span class="likeUnit-${showDetails?.id}">
                                <i class="fa fa-heart likeBtn ${
                                  showDetails?.likes > 0 ? "heart-active" : ""
                                }" data-movie-id="${
  showDetails?.id
}" id="likeBtn-${showDetails?.id}" freshLikeBtn="yes"></i> 
                                <span id="likeNum-${
                                  showDetails?.id
                                }" class="likeNum" data-movie-id="${
  showDetails?.id
}">${showDetails.likes}</span> 
                                <span id="likeText-${
                                  showDetails?.id
                                }" id="likeText">${
  showDetails?.likes > 1 ? "Likes" : "Like"
}</span>
                            </span>
                        </div>
                    <button type="button" class="btn btn-primary commentsModalBtn" id="comments-${
                      showDetails?.id
                    }" data-toggle="modal" data-target=".comment-modal-lg" data-movie-id="${
  showDetails?.id
}" freshCommentBtn="yes">Comments</button>
                    </div>
                </div>
            </div>`;

export default movieItems;
