import { useState } from 'react'
import './styles.css'
import { Pokemon, Ability } from '../../../interfaces/pokemon'
export const Card = ({ pokemon }: Pokemon) => {
	const { name, abilities, sprites, height, base_experience } = pokemon
	const { front_default, back_default } = sprites
	const [image, setImage] = useState(front_default)
	const changeImage = () => {
		if (image.includes('back')) {
			setImage(front_default)
		} else {
			setImage(back_default)
		}
	}
	return (
		<div className="card">
			<div className="card__header">
				<h2>{name}</h2>
				<div className="content__image">
					<img onClick={changeImage} src={image} alt={name} />
				</div>
			</div>
			<ul>
				{abilities.map(({ ability, slot }: Ability) => (
					<li key={slot}>{ability.name}</li>
				))}
			</ul>
			<div className="">
				<h4>Height: {height}</h4>
				<h4>Experience: {base_experience}</h4>
			</div>
		</div>
	)
}
