import React, { useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import "./SeriesHandle.css";

const SeriesHandler = ({ movieDetails, setPlayerSrc,playerRef }) => {
  const navigate = useNavigate();
  const [selectedEpisode, setSelectedEpisode] = useState(null);
  const getEpisodeClassName = (season, episode) => {
    if (`${season}-${episode}` === selectedEpisode) {
      return "list-group-item list-group-item-action occordionList selected";
    } else {
      return "list-group-item list-group-item-action occordionList";
    }
  };

  const episodeHandler = (season, episodeNum, episodeLink) => {
    navigate(
      `/movies/${movieDetails._id}?season=${season}episode=${episodeNum}`
    );
    setSelectedEpisode(`${season}-${episodeNum}`);
    setPlayerSrc(episodeLink);
    window.scrollBy(0,playerRef.getBoundingClientRect().top)
  };

  return (
    <div>
      <div className="accordion accordion-flush" id="accordionFlush">
        {movieDetails.videos &&
          movieDetails?.videos?.map((obj) => {
            let id = `${movieDetails._id}-Season-${obj.season}`
            return (
              <div key={obj.season+"season"+movieDetails.name} className="accordion-item">
                <h2 className="accordion-header">
                  <button
                    className="accordion-button collapsed  occordionOnFocus"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#${id}`}
                    aria-expanded="false"
                    aria-controls={`${id}`}
                  >
                    Season {obj.season}
                  </button>
                </h2>
                <div
                  id={`${id}`}
                  className="accordion-collapse collapse "
                  data-bs-parent="#accordionFlushExample"
                >
                  <div className="accordion-body">
                    <div className="list-group">
                      {obj.episodes?.map((episode, index) => {
                        return (
                          <p
                          key={obj.season+"episode"+movieDetails.name+index}
                            className={getEpisodeClassName(
                              obj.season,
                              index + 1
                            )}
                            style={{ cursor: "pointer" }}
                            onClick={() =>
                              episodeHandler(obj.season, index + 1, episode)
                            }
                          >
                            Episode {index + 1}
                          </p>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SeriesHandler;