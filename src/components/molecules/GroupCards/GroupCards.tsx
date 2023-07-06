import { useEffect, useState } from 'react'
import { Card } from '../Card/Card'
import axios from 'axios'
import './styles.css'
import { Pokemon } from '../../../interfaces/pokemon'
export const GroupCards = () => {
	const [pokemons, setPokemons] = useState<Pokemon[]>([])
	const [limit, setLimit] = useState(1)
	const [loading, setLoading] = useState(false)
	const fetchApi = async (limit: number) => {
		let count: Array<Pokemon> = []
		for (let i = limit; i < limit + 9; i++) {
			const { data } = await axios(`https://pokeapi.co/api/v2/pokemon/${i}`)
			count = [...count, data]
			setLoading(false)
		}
		setLoading(true)
		setPokemons(count)
		setLimit(limit)
	}
	useEffect(() => {
		fetchApi(limit)
	}, [])

	return (
		<article>
			<button onClick={() => fetchApi(limit - 9)}>back</button>

			<button onClick={() => fetchApi(limit + 9)}>Next</button>
			{loading && (
				<section className="groupCards">
					{pokemons.length > 0
						? pokemons.map((pokemon, i) => <Card key={i} pokemon={pokemon} />)
						: 'Loading'}
				</section>
			)}
		</article>
	)
}
