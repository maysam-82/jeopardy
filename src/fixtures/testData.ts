import { ICategory, IClue } from '../types/category.d';
export const testCategories: ICategory[] = [
	{
		id: 11531,
		title: 'test category 001',
		clues_count: 5,
	},
	{
		id: 11532,
		title: 'test category 002',
		clues_count: 5,
	},
	{
		id: 5412,
		title: 'test category 003',
		clues_count: 10,
	},
];

export const testClues: IClue[] = [
	{
		id: 87819,
		answer: 'chores',
		question:
			"They're routine tasks done around the house, & before you go out to play, you'd better do yours",
		value: 200,
		airdate: '2009-07-16T12:00:00.000Z',
		created_at: '2014-02-14T01:53:29.129Z',
		updated_at: '2014-02-14T01:53:29.129Z',
		category_id: 11532,
		game_id: null,
		invalid_count: null,
		category: {
			id: 11532,
			title: 'let\'s "ch"at',
			created_at: '2014-02-14T01:53:28.916Z',
			updated_at: '2014-02-14T01:53:28.916Z',
			clues_count: 5,
		},
	},
	{
		id: 87825,
		answer: 'charcoal',
		question:
			"It's the form of carbon your dad probably uses when he fires up the barbecue",
		value: 400,
		airdate: '2009-07-16T12:00:00.000Z',
		created_at: '2014-02-14T01:53:29.339Z',
		updated_at: '2014-02-14T01:53:29.339Z',
		category_id: 11532,
		game_id: null,
		invalid_count: null,
		category: {
			id: 11532,
			title: 'let\'s "ch"at',
			created_at: '2014-02-14T01:53:28.916Z',
			updated_at: '2014-02-14T01:53:28.916Z',
			clues_count: 5,
		},
	},
];
