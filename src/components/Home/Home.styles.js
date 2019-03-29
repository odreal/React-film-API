import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
	text-decoration: none;
`;

export const MovieListBox = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	flex-wrap: wrap;
	
`;

export const MovieListItem = styled.div`
	width: 15vw;
	margin: 30px;
	padding: 20px;
	border-radius: 3px;
	box-shadow: none;
	transition: all 200ms ease-in;
	&:hover {
        box-shadow: 0 .5rem 1rem rgba(0,0,0,.15)
	}
`;

export const MovieListPoster = styled.img`
	width: 100%;
	height: 100%;
`;

export const MovieListText = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
`;

export const Page = styled.div`
	background: #ffffff;
	display: flex;
	align-items: center;
	flex-direction: column;
	
`;

export const FilmForm = styled.form`
	margin: 20px;	
`;

export const FilmInput = styled.input`
	width: 360px;
	background: #fff;
	color: $input-text-color;
	font: inherit;
	box-shadow: 0 6px 10px 0 rgba(0, 0, 0 , .1);
	border: 0;
	outline: 0;
	padding: 22px 18px;
`;

export const FilmSubmit = styled.button`
	display: inline-block;
	color: inherit;
	font: inherit;
	border: 0;
	outline: 0;
	transition: all 200ms ease-in;
	cursor: pointer;
	background: #7f8ff4;
	color: #fff;
	box-shadow: 0 0 10px 2px rgba(0, 0, 0, .1);
	border-radius: 2px;
	padding: 12px 36px;
	margin-left: -96px;
	&:hover {
		background: #7183f2;	
	}
	
	&:active {
		background: #7f8ff4;
		box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);
	}
`;

export const FilmLabel = styled.p`
	font-size: 1rem;
	color: #858585;
	max-width: 100%;
	text-decoration: none;
	margin: 0;
	${props => props.bold && css`
		font-weight: bold;
	`}
	${props => props.color && css`
		color: ${props.color};
	`}
`;