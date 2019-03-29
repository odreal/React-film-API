import React from 'react';
import { FilmLabel, StyledLink, FilmForm, FilmInput, FilmSubmit, Page, MovieListBox, MovieListItem, MovieListPoster, MovieListText } from './Home.styles.js';
import PropTypes from 'prop-types';

const Home = ({searchInput, submitValue, data}) => (
	<Page>
		<FilmForm onSubmit={submitValue}>
			<FilmInput placeholder="Chercher un film" ref={searchInput} />
			<FilmSubmit type="submit">Chercher</FilmSubmit>
		</FilmForm>
		<MovieListBox>
		{	
			data!=null ?
				data.Response === 'True' ?
					data.Search.map((a, i) =>
					<StyledLink key={i} to={"show/"+a.imdbID}>
						<MovieListItem >
							
							{
								a.Poster !== 'N/A' ?
									<MovieListPoster src={a.Poster} alt="Aucune image disponible pour ce film"/>
								:
									<MovieListPoster src="https://www.cornellstore.com/c.4488804/b2c/img/no_image_available.jpeg" alt="Aucune image disponible pour ce film"/>
							}
							<MovieListText>
								<FilmLabel bold color={"#7f8ff4"}>{a.Title}</FilmLabel>
								<FilmLabel>Date de sortie : {a.Year}</FilmLabel>
							</MovieListText>
						</MovieListItem>
					</StyledLink>
					)
					:
					'Aucun résultat pour la recherche'
			 : ''
		}
		</MovieListBox>
	</Page>
);

Home.propTypes = {
  searchInput: PropTypes.object.isRequired,
  submitValue: PropTypes.func.isRequired,
};

export default Home;