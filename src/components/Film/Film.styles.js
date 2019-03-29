import styled from '@emotion/styled';
import { css } from '@emotion/core';

export const FilmInfo = styled.span`
	font-size: 0.90rem;
	font-weight: light;
	color: #222222;
`;

export const FilmLabel = styled.p`
	font-size: 1rem;
	color: #7f8ff4;
	max-width: 40vw;
	${props => props.titre && css`
		color: #222222;
		font-weight: bold;
	`}
	
	${props => props.noPadding && css`
		margin: 2px;
	`}
	
	${props => props.color && css`
		color: ${props.color};
	`}
`;

export const FilmBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	flex-wraps: wrap;
`;

export const FilmLabelBox = styled.div`
	margin-left: 20px;
`;

export const FilmPoster = styled.img`
	width: 15vw;
	height: 100%;
`;

export const Page = styled.div`
	background: #ffffff;
	padding: 40px;
`;