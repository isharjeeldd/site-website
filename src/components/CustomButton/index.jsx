import { Button } from '../ui/button';

const CustomButton = ({ btnTitle }) => {
    return (
        <Button variant="outline" size="default">
            {btnTitle}
        </Button>
    );
};

export default CustomButton;
