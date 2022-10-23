var stn = function(a,b,c,B) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.B = B;
	this.cp = function(){
		return new stn(this.a, this.b, this.c, this.B);
	};
	this.change_basis = function(){
		if(this.B==1){
			var A=(this.a+2*this.b)/3;
			var B=(this.a-this.b+Math.sqrt(3)*this.c)/3;
			var C=(this.a-this.b-Math.sqrt(3)*this.c)/3
			this.a=A;
			this.b=B;
			this.c=C;
			this.B=0;
		}
		if(this.B==0){
			var A=this.a+this.b+this.c;
			var B=this.a-(this.b+this.c)/2;
			var C=Math.sqrt(3)*(this.b-this.c)/2
			this.a=A;
			this.b=B;
			this.c=C;
			this.B=1;
		}
	}
	this.add=function(){};
	this.multiply=function(){};
	this.N=function(){};
	this.divide=function(){};
	this.exp=function(){};
	this.ln=function(){};
};
