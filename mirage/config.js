/**
 Use in cases where data from backend is not available
*/
export default function() {
	this.namespace = '/api';

	this.get('/posts', () => {
		return {
			data: [{
				type: 'posts',
				id: '1',
				attributes: {
					title: 'Test Title 1',
					body: 'Test body 1'
				}
			}, {
				type: 'posts',
				id: '2',
				attributes: {
					title: 'Test Title 2',
					body: 'Test body 2'
				}
			}, {
				type: 'posts',
				id: '3',
				attributes: {
					title: 'Test Title 3',
					body: 'Test body 3'
				}
			}]
		};
	});
}
