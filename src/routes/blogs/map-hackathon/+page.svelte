<script>
	import { base } from '$app/paths';
</script>

<h3 class="text-3xl md:text-4xl lg:text-5xl font-bold text-center px-12">
	Mappls MapMyIndia Hackathon
</h3>

<p class="py-12">
	Participating in hackathons is always a thrilling experience, and the Mappls MapmyIndia Hackathon,
	part of our college's tech fest APOGEE 2024, was no exception. Our team, consisting of me and my
	friend, took on the challenge of creating something innovative using the Mappls API over the
	weekend. With AI being the buzzword these days, we felt compelled to include it in our project.
</p>
<h3 class="place-self-start font-bold text-xl pb-4">The Idea:</h3>
<p class="pb-12">
	After brainstorming various ideas, we settled on pothole detection. The concept was simple yet
	impactful: using gyroscope and accelerometer data from users navigating through maps, we aimed to
	detect potholes. This data would be sent to our backend server, where a trained AI model would
	classify whether a pothole was present in the data chunk.
</p>
<h3 class="place-self-start font-bold text-xl pb-4">The Approach:</h3>
<p class="pb-8">
	To bring our idea to life, we needed to train an AI model. We referred to an academic paper titled <a
		href="https://www.mdpi.com/1424-8220/23/22/9023"
		target="_blank"
		rel="noopener noreferrer"
		class="link link-hover text-blue-400"
		>"Real-Time Pothole Detection Using Smartphone Sensors and Machine Learning"</a
	> to replicate the model's architecture.
</p>
<img src="{base}/images/map-3.jpg" alt="" class="pb-8" />
<p class="pb-4">
	The architecture described in the paper involved using a Convolutional Neural Network (CNN) to
	analyze time-series data from smartphone sensors. Specifically, the model consisted of several
	convolutional layers followed by pooling layers, which helped in extracting important features
	from the raw gyroscope and accelerometer data. These features—such as sudden spikes in
	acceleration—are crucial indicators of a pothole.
</p>
<p class="pb-12">
	After the convolutional and pooling layers, the extracted features were passed through fully
	connected layers, where the model learned to classify the data as indicating a pothole or not.
</p>
<h3 class="place-self-start font-bold text-xl pb-4">The Solution:</h3>
<ul class="pb-12 list-disc">
	<li class="pb-4">
		<b>Data Collection App:</b> A data collection app was developed to gather gyroscope and
		accelerometer data, and to mark the pothole labels for training the model. This is only used for
		training the model initially. <b>(Flutter)</b>
	</li>
	<li class="pb-4">
		<b>AI Model:</b> The AI model was implemented as discussed earlier, and was trained on the
		collected data. The model was then deployed on the backend server.
		<b>(Python + Tensorflow.Keras)</b>
	</li>
	<li class="pb-4">
		<b>Client App:</b> The client app was responsible for sending the end users' gyroscope and
		accelerometer data to the backend server, where the trained AI model would classify it, and
		constantly update the database accordingly. The user would also be able to view the potholes on
		their navigation route from the database. <b>(Flutter + Mappls Flutter SDK)</b>
	</li>
	<li class="pb-4">
		<b>Backend Server:</b> The backend server was responsible for receiving the data chunk from the
		end user, processing it, and sending it to the AI model for classification. The server would
		then update the database in real-time with the pothole information using a exponential moving
		average (EMA) filter. This filter was used to smooth out the pothole data, and to prevent false
		positives. Once the pothole was confirmed with enough data points from different users, it would
		be marked on the route of the map. <b>(Python + Flask)</b>
	</li>
</ul>
<div
	class="flex flex-row no-scrollbar lg:justify-center justify-start size-full overflow-auto flex-shrink-0 contain-content"
>
	<img src="{base}/images/map-2.jpg" alt="" />
	<div class="min-w-4"></div>
	<img src="{base}/images/map-1.jpg" alt="" />
</div>
<div class="sm:hidden pt-8">>> scroll >></div>
<h3 class="place-self-start font-bold text-xl pb-4 pt-12">Pitching the Idea:</h3>
<p class="pb-12">
	We pitched our idea and showed the live demo to the organizers including the CEO, they seemed
	impressed and mentioned that they were working on a similar project. We discussed many aspects of
	our solution, battery life impact, pratical usability, network usage, etc. all of which I had in
	back of my mind too during the development. They appreciated our efforts and suggested that we
	could collaborate with them in the future by offering us an internship.
</p>
<h3 class="place-self-start font-bold text-xl pb-4">Conclusion:</h3>
<p class="pb-4">
	Of course, our over-the-weekend solution isn't perfect, nor tested in real-world scenarios.
	Currently a single data chunk contains last 2 seconds of sensor data and their coordinates,
	sampled at 50Hz, sent to the server. This would be a lot of data to send and process as the number
	of clients increase. But, there's room for lot of optimizations.
</p>
<p class="pb-8">
	For example, our AI model could potentially run on the client-side using TensorFlow Lite (TFLite)
	on a separate thread, which would eliminate the need to send large amounts of sensor data to the
	server. We could also use a more sophisticated model like a Recurrent Neural Network (RNN) or Long
	Short-Term Memory (LSTM) network to capture the temporal dependencies in the data.
</p>
<p class="pb-4">
	Anyways, it was a great experience and we got the second prize in the hackathon. Not bad for a
	weekend's work for a generous prize amount! <a
		href="https://github.com/sparshg/map-hackathon"
		class="link link-hover text-blue-400"
		target="_blank"
		rel="noopener noreferrer">Open Repo...</a
	>
</p>
