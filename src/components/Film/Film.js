import React from 'react';
import { Page, FilmBox, FilmInfo, FilmLabel, FilmLabelBox, FilmPoster} from './Film.styles.js';

const Film = ({data}) => (
	<Page>		
		<div>
		{	
			data!=null ?
				data.Response === 'True' ?
					(
						<FilmBox>
						{
							data.Poster !== 'N/A' ?
								<FilmPoster src={data.Poster}/>
							:
								<FilmPoster src="https://www.cornellstore.com/c.4488804/b2c/img/no_image_available.jpeg"/>
						}
							<FilmLabelBox>
								<FilmLabel titre>{data.Title}</FilmLabel>
								<FilmLabel>Date de sortie : <FilmInfo>{data.Released}</FilmInfo> </FilmLabel>
								<FilmLabel>Avec : <FilmInfo>{data.Actors}</FilmInfo> </FilmLabel>
								<FilmLabel>Réalisateur : <FilmInfo>{data.Director}</FilmInfo> </FilmLabel>
								<FilmLabel>Production : <FilmInfo>{data.Production}</FilmInfo> </FilmLabel>
								<FilmLabel>Pays : <FilmInfo>{data.Country}</FilmInfo> </FilmLabel>
								<FilmLabel>Durée du film : <FilmInfo>{data.Runtime}</FilmInfo> </FilmLabel>
								<FilmLabel>Genre : <FilmInfo>{data.Genre}</FilmInfo> </FilmLabel>
								<FilmLabel>Synopsis : <FilmInfo>{data.Plot}</FilmInfo> </FilmLabel>
								<FilmLabel>Notes obtenues :</FilmLabel>
									{ data.Ratings.map((a, i) =>
										<FilmLabel noPadding color={"#222222"} key={i}>{a.Source} <FilmInfo>{a.Value}</FilmInfo></FilmLabel>
									) }
							</FilmLabelBox>
						</FilmBox>
					)
					:
					'Pas de réponses'
			 : ''
		}
		</div>
	</Page>
);

export default Film;