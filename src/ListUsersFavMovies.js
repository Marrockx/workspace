/** @format */

import React, { Component } from "react";

class ListUsersFavMovies extends Component {
	render() {
		return (
			<div>
				<ol className='movies-list'>
					{this.props.profiles.map((profile, userName, favoriteMovie) => {
						return (
							[
								(userName = this.props.users[profile.userID].name),
								(favoriteMovie =
									this.props.movies[profile.favoriteMovieID].name),
							],
							(
								<li key={profile.id}>
									<div>
										<p>
											{userName}'s favorite movie is {favoriteMovie}
										</p>
									</div>
								</li>
							)
						);
					})}
				</ol>
			</div>
		);
	}
}

export default ListUsersFavMovies;
