const Photos = (props) => {
  const openSite = (url) => {
    window.open(url)
  }

  return (
    <div className="photos-container">
      { ( typeof props.photos === "string" ) ? 
        <div className="initial-search-message">Search for something!</div> :
        
        ( props.photos.length === 0 ) ? 
        <div className="no-res-message">No results</div> 
        
        : props.photos.map((photo) => 
          <article 
            key={photo.id}
          >
            <img 
              onClick={() => {openSite(photo.links.html)}} 
              alt="search result" src={photo.urls.regular} 
            />
            <p className="image-desc">{[photo.description, photo.alt_description].join(" - ")}</p>
          </article>
      )}
    </div>
  )
}

export default Photos