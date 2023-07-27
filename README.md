<h1>MovieSearch App</h1>
<h2>Overview</h2>
<p>This is a movie search app that allows users to search for movies by title, genre, or actor using an API.
</p>
<h2>How to Run</h2>
<p>Use git to clone the repository</p>

```
git clone https://github.com/ImMo3n/MovieSearch
```

<p>Use code below to install packages</p>

```
npm install
```

<p>Use the code below to run the app in development mode</p>

```
npm run dev
```

<h2>How the app works</h2>
<h3>Fetching</h3>
<p>This app uses <a target="_blank" href="https://tanstack.com/">React Query (Tanstack Query)</a> to fetch data.</p>
<p>It uses <a target="_blank" href="https://reactrouter.com/en/main">React Router</a> to move between the search page and main landing page.</p>
<p>It uses <a target="_blank" href="https://styled-components.com/">Styled Components</a> to style elements.</p>
<p>The API for fetching movie data is <a target="_blank" href="https://www.themoviedb.org/">TMDB</a>.</p>
<p>The search bar has a form element that when submitted navigates to the search page with term and category in the url which gets parsed in the search page to display the correct category and data.</p>
<p>While being navigated to search page three <a target="_blank" href="https://tanstack.com/query/v4/docs/react/reference/useInfiniteQuery">useInfiniteQueries</a> to fetch <a target="_blank" href="https://developer.themoviedb.org/reference/search-person">/person</a>, <a target="_blank" href="https://api.themoviedb.org/3/search/tv">/tv</a>, <a target="_blank" href="https://api.themoviedb.org/3/search/movie">/movie</a> are called for the search term passed to the page.</p>
<p>The use of useInfiniteQuery is for infinite scrolling the search items. When the button of the "load more" is visible in the user's browser the useInfiniteQuery's function fetchNextPage is automatically called.</p>
<h3>Modal</h3>
<p>The movie/person/tv details are being outputted using <a target="_blank" href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog">dialog</a> element.</p>
<p>The app has a context for it's modal object and updater of that id.</p>
<p>By default the object is null, and when user closes the modal it also becomes null. When it's null the modal disappears.</p>
<p>The opening of modal</p>

```
dialogElement.showModal();
```

<p>Happens in the useEffect</p>

```
useEffect(() => {
    modalRef.current.showModal();
}, [modalObject?.id, modalObject?.category]);
```

<p>Based on category it either displays MovieDetail or PersonDetail modal with it's info.</p>
