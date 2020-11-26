package oopHomework;

public class Circle2 {
	private double radius;
	
	public Circle2() {
		this.radius = 1.0;
	}
	
	public Circle2(double radius) {
		this.radius = radius;
	}
	
	public double getRadius() {
		return this.radius;
	}
	
	public void setRadius(double radius) {
		this.radius = radius;
	}
	
	public double getArea() {
		return Math.PI * Math.pow(this.radius, 2); 
	}
	
	public double getCircumference() {
		return 2 * Math.PI * this.radius;
	}
	
	@Override
	public String toString() {
		return "Circle[radius=" + this.radius + "]";
	}
	
}
