// 时间格式化
export const parseTime = (time, format = '{y}-{m}-{d} {h}:{i}:{s}') => {
	let date = null
	if (!time) {
		time = new Date()
	}
	if (typeof time === 'string') {
		time = time.replace(/-/g, '/')
	}
	if (Number(time)) {
		time = parseInt(time)
	}

	date = new Date(time)
	const formatObj = {
		y: date.getFullYear(),
		m: date.getMonth() + 1,
		d: date.getDate(),
		h: date.getHours(),
		i: date.getMinutes(),
		s: date.getSeconds()
	}
	const strTime = format.replace(/{(y|m|d|h|i|s)+}/g, (result, key) => {
		let value = formatObj[key]
		if (result.length > 0 && value < 10) {
			value = '0' + value
		}
		return value
	})
	return strTime
}
