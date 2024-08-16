<script>
	import { base } from '$app/paths';
</script>

<h3 class="text-xl lg:text-3xl font-bold text-center px-12 pb-12">
	Leveraging Dual Encoders with Feature Disentanglement for Anomaly Detection in Thermal Videos
</h3>
<p class="pb-12">
	<b>Abstract.</b> Anomaly detection is critical for real-time applications, e.g., monitoring elderly
	people or kids from a remote place; gas leakage detection, night vision surveillance, etc. Detecting
	anomalous behavior becomes even more challenging when the device used for capturing scenes is the thermal
	camera. The thermal videos have the ability to preserve the identity of the subjects involved in the
	scenes. The info-deficit nature of thermal imagery, i.e., lack of texture, contours, and colors, makes
	it difficult to fetch the salient details required to differentiate between normal and abnormal events.
	Most approaches for anomaly detection in videos explicitly model regions of interest (ROIs). However,
	this modeling poses limitations of accurate RoI detection more in thermal videos when the size of ROIs
	is smaller than the size of the frame. Moreover, the techniques, that take advantage of corresponding
	visible videos to detect anomalies in thermal videos, have a limitation of requiring twin videos.
</p>
<img src="{base}/images/dfed.jpg" alt="DFED-NET framework" class="pb-12" />
<p class="pb-12">
	To address these limitations, we present a frame-level unsupervised approach that learns two sets
	of features from two different encoders in a disentangled fashion (Fig.1). The learning objectives
	of the proposed approach is aggregation of reconstruction error of the middle frame and
	disentanglement error between two encodings. We perform extensive experiments on two benchmark
	thermal video datasets, Thermal Rare Event and TSF. The proposed approach outperforms
	state-of-the-art models for anomaly detection from visible and thermal spectrum.
</p>
<p>
	The paper has been reviewed and accepted for presentation at the 2024 International Conference on
	Pattern Recognition (ICPR). <a href="" class="link text-blue-400">Read Paper...</a>
</p>
