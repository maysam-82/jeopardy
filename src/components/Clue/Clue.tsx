import React from 'react';
import { ListGroup } from 'react-bootstrap';
import './clue.css';

interface IClueProps {
	answer: string;
	value: number;
	question: string;
}

interface IClueState {
	isAnswerVisible: boolean;
}

class Clue extends React.Component<IClueProps, IClueState> {
	constructor(props: IClueProps) {
		super(props);

		this.state = {
			isAnswerVisible: false,
		};
	}

	onQuestionClickedHandler = () => {
		this.setState((prevState) => ({
			isAnswerVisible: !prevState.isAnswerVisible,
		}));
	};

	render() {
		const { answer, question, value } = this.props;
		const { isAnswerVisible } = this.state;
		return (
			<ListGroup className="mb-2">
				<ListGroup.Item className="font-weight-bold" variant="secondary">
					{value}
				</ListGroup.Item>
				<ListGroup.Item
					action
					variant="warning"
					onClick={this.onQuestionClickedHandler}
				>
					{question}
				</ListGroup.Item>
				<ListGroup.Item
					className={`${isAnswerVisible ? 'answer-visible' : 'answer-hidden'}`}
					variant="success"
				>
					{answer}
				</ListGroup.Item>
			</ListGroup>
		);
	}
}

export default Clue;
