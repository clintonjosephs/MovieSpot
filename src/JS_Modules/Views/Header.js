import Logo from '../../images/logo.gif';

const header = () => `<header class="header-section">
<div class="container my-2">
    <div class="row header-container">
        <div class="col-md-6 col-sm-12 logo">
            <img src="${Logo}" alt="movie point logo" width="70px" height="70px"/>
            <h2 class="caption">MOVIE<span>SPOT</span></h2>
        </div>
        <div class="col-md-6 col-sm-12">
            <form method="post" class="searchMovie">
                <div class="input-group">
                        <input type="text" class="form-control search_movie" placeholder="Search a movie" aria-label="Search a movie" aria-describedby="search_movie" required />
                        <div class="input-group-append">
                        <button type="submit" class="input-group-text" id="search_movie"><i class="fa fa-film">&nbsp;</i>Search</button>
                        </div>
                </div>
            </form>
        </div>
    </div>
</div>
</header>`;

export default header;