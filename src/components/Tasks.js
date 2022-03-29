

// const tasks = [
// {
// 	id:1,
// 	text:'Doctors Appointment',
// 	day:'Feb 5th at 3:30PM',
// 	reminder:true,
// },
// {
// 	id:2,
// 	text:'Meeting at school',
// 	day:'Feb 6th at 1:30PM',
// 	reminder:true,
// },
// {
// 	id:3,
// 	text:'Foodshopping',
// 	day:'Feb 7th at 2:30PM',
// 	reminder:false,
// },
// ]
import Task from './Task'
const Tasks = ({ tasks, OnDelete  }) => {



	return(
		<>
		{tasks.map((task) => (
			<Task key={task.id} task={task}
			onDelete={onDelete}
			/>
			))}
		</>
		)
}
export default Tasks