import ConvertNowBtn from "../ui/Buttons/ConvertNowBtn";
import Image from "next/image";

import { motion } from "framer-motion";
import { ImFolderUpload } from "react-icons/im";

export function UploadSection() {
	return (
		<div className='container'>
			<div className='row my-5 py-5'>
				<div className='d-flex flex-column gap-5 flex-md-row flex-lg-row'>
					<div className='col-sm-12 col-md-4 d-flex flex-column justify-content-center align-items-start'>
						<div>
							<h1 className='title fw-bold'>
								Word to PDF Made<span className='text-red '> Easy!</span>
							</h1>
							<p>
								Our user-friendly PDF tool simplifies your tasks. Edit, merge, convert, compress,
								sign & secure effortlessly. Say goodbye to complexity; hello to easy PDF management.
							</p>
						</div>
						<ConvertNowBtn text='convert now' />
					</div>
					<div className='col-sm-12 col-md-8 '>
						<figure>
							<Image src='/upload-image.jpg' className="text-center img-thumbnail border-0" alt='Vector Image' sizes="(max-width: 1920px) 100vw" width={800} height={500} loading="lazy" />
							<figcaption>
                            <a href="https://www.vecteezy.com/vector-art/5879539-cloud-computing-modern-flat-concept-for-web-banner-design-man-enters-password-and-login-to-access-cloud-storage-for-uploading-and-processing-files-vector-illustration-with-isolated-people-scene"></a>
							</figcaption>
						</figure>
					</div>
				</div>
			</div>
		</div>
	);
}
