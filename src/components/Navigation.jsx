import { Link } from "react-router-dom"
import { Covenas1 } from "./Covenas1"
import { Covenas2 } from "./Covenas2"
import { Covenas3} from "./Covenas3"
import { Covenas4 } from "./Covenas4"
import { Covenas5 } from "./Covenas5"
import { Covenas6 } from "./Covenas6"


export default function Navigation() {
  return (
    <div className="container thumbnail-container mt-2">
      <Link to='/covenas1' className="links">
        <figure className="thumbnail-image-size">
            <Covenas1 />
            <figcaption>Coveñas uno</figcaption>
        </figure>
      </Link>
      <Link to='/covenas2' className="links">
        <figure className="thumbnail-image-size">
            <Covenas2 />
            <figcaption>Coveñas uno</figcaption>
        </figure>
      </Link>
      <Link to='/covenas3' className="links">
        <figure className="thumbnail-image-size">
            <Covenas3 />
            <figcaption>Coveñas uno</figcaption>
        </figure>
      </Link>
      <Link to='/covenas4' className="links">
        <figure className="thumbnail-image-size">
            <Covenas4 />
            <figcaption>Coveñas uno</figcaption>
        </figure>
      </Link>
      <Link to='/covenas5' className="links">
        <figure className="thumbnail-image-size">
            <Covenas5 />
            <figcaption>Coveñas uno</figcaption>
        </figure>
      </Link>
      <Link to='/covenas6' className="links">
        <figure className="thumbnail-image-size">
            <Covenas6 />
            <figcaption>Coveñas uno</figcaption>
        </figure>
      </Link>

    </div>
  )
}
