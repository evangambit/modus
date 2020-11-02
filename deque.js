class Deque {
  constructor(n) {
    if (n == undefined) {
    	n = 10;
    }
    this.start = 0;
    this.length = 0;
    this.data = new Array(n + 1);
  }
  push_back(obj) {
    if (this.length == this.data.length - 1) {
    	this.resize(this.data.length * 2);
    }
    let end = (this.start + this.length) % this.data.length;
    this.data[end] = obj;
    ++this.length;
  }
  pop_back() {
    if (this.length == 0) {
    	return null;
    }
    let end = (this.start + this.length + this.data.length - 1) % this.data.length;
    let r = this.data[end];
    this.data[end] = null;
    --this.length;
    return r;
  }
  pop_front() {
    if (this.length == 0) return null;
    let r = this.data[this.start];
    this.data[this.start] = null;
    this.start = (this.start + 1) % this.data.length;
    --this.length
    return r;
  }
  resize(n) {
    let A = new Array(n);
    for (let i = 0; i < this.length; ++i) {
    	A[i] = this.get(i);
    }
    this.data = A;
    this.start = 0;
  }f
  get(idx) {
    return this.data[(idx + this.start) % this.data.length];
  }
}

