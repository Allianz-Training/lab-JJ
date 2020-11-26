package oopHomework;

public class Rectangle {
	private float length;
	private float width;
	
	public Rectangle() {
		length = 1.0f;
		width = 1.0f;
	}
	
	public Rectangle(float length,float width) {
		this();
		this.length = length;
		this.width = width;
	}

	public float getLength() {
		return length;
	}

	public void setLength(float length) {
		this.length = length;
	}

	public float getWidth() {
		return width;
	}

	public void setWidth(float width) {
		this.width = width;
	}
	
	public double getArea() {
		return this.width * this.length;
	}
	
	public double getPerimeter() {
		return 2*(this.width + this.length);
	}
	
	@Override
	public String toString() {
		return "Rectangle[length="+this.length+",width="+this.width+"]";
	}
}
