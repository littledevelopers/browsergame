package browsergame.map.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "MAP")
public class Map {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "ID")
	private long id;
	
	@Column(name = "COORD_X",nullable = false)
	@NotNull
	private int coordX;
	
	@Column(name = "COORD_Y",nullable = false)
	@NotNull
	private int coordY;
	
	@Column(name = "TEST_TYPE",nullable = false)
	@NotNull
	private int testType;

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public int getCoordX() {
		return coordX;
	}

	public void setCoordX(int coordX) {
		this.coordX = coordX;
	}

	public int getCoordY() {
		return coordY;
	}

	public void setCoordY(int coordY) {
		this.coordY = coordY;
	}

	public int getTestType() {
		return testType;
	}

	public void setTestType(int testType) {
		this.testType = testType;
	}

	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + coordX;
		result = prime * result + coordY;
		result = prime * result + (int) (id ^ (id >>> 32));
		result = prime * result + testType;
		return result;
	}

	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		Map other = (Map) obj;
		if (coordX != other.coordX)
			return false;
		if (coordY != other.coordY)
			return false;
		if (id != other.id)
			return false;
		if (testType != other.testType)
			return false;
		return true;
	}

	@Override
	public String toString() {
		return "Map [id=" + id + ", coordX=" + coordX + ", coordY=" + coordY
				+ ", testType=" + testType + "]";
	}
	
	

}
