const uuidv4 = require('uuid/v4')
const aws = require('aws-sdk')

module.exports = async (file) => {
	const s3 = new aws.S3()

	const fileType = filetype(file)
	const extension = fileType.ext
	const mimeType = fileType.mime

	const params = {
		Body: file,
		Bucket: 'hogehoge_bucket_name',
		Key: [uuidv4(), extension].join('.'),
		ContentType: mimeType
	}
	
	await s3.putObject(params).promise()
}
console.log(ContentType)