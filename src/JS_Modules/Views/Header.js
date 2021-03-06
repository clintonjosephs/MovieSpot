import Logo from '../../images/logo.gif';

const header = () => `<header class="header-section">
<div class="container my-2">
    <div class="row header-container">
        <div class="col-md-6 col-sm-12 logo">
            <a href="" class="headLink"><img src="${Logo}" alt="movie point logo" width="70px" height="70px"/></a>
            <a href="" class="headLink"><h2 class="caption">MOVIE<span>SPOT</span></h2></a>
        </div>
        <div class="col-md-6 col-sm-12">
            <form method="post" class="searchMovie">
                <div class="input-group">
                        <input type="text" class="form-control search_movie" id="movieTitle" placeholder="Search a movie" aria-label="Search a movie" aria-describedby="search_movie" required />
                        <div class="input-group-append">
                        <button type="submit" class="input-group-text" id="search_movie">
                        <div class="spinner-border spinner-border-sm text-light search-spinner hide" role="status"></div>
                        <i class="fa fa-search show">&nbsp;</i>Search</button>
                        </div>
                </div>
            </form>
        </div>
    </div>
</div>
</header>`;

export default header;